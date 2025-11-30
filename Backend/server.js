import bcrypt from 'bcryptjs'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import express from 'express'
import pool from './db.js'
import { protect } from './middleware.js'
import jwt from 'jsonwebtoken'

//middleware
const app = express()
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))
app.use(express.json())
app.use(cookieParser())

const cookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'Strict',
    maxAge: 30 * 24 * 60 * 60 * 1000 //30 dias
}

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d'
    })
}

app.post("/denuncias", async (req, res) => {
    try {
        const { numero_telefone, instituicao, descricao, regiao } = req.body
        const novaDenuncia = await pool.query(
            "INSERT INTO denuncias (numero_telefone, instituicao, descricao, regiao) VALUES ($1, $2, $3, $4) RETURNING * ",
            [numero_telefone, instituicao, descricao, regiao]
        )
        res.json(novaDenuncia.rows[0])

    } catch (err) {
        console.log(err.message);
    }
})



app.get("/denuncias", async (req, res) => {
    try {
        const todasDenuncias = await pool.query(
            "SELECT * FROM denuncias"
        )
        res.json(todasDenuncias.rows)

    } catch (err) {
        console.error(err.message);
    }
})


app.get("/denuncias/denunciaQuantidade", async (req, res) => {
    try {
        const contagemDenuncias = await pool.query(
            "SELECT COUNT(*) FROM denuncias")
        res.json({ total: contagemDenuncias.rows[0].count })
    } catch (err) {
        console.error(err.message);

    }
})



app.get("/denuncias/numeroQuantidade", async (req, res) => {
    try {
        const contagemNumeros = await pool.query(
            "SELECT COUNT(DISTINCT numero_telefone) FROM denuncias")
        res.json({ total: contagemNumeros.rows[0].count })
    } catch (err) {
        console.error(err.message)
    }
})


// retorna data/hora da última denúncia (ISO string)
app.get('/denuncias/ultima', async (req, res) => {
    try {
        const result = await pool.query(
            "SELECT data_denuncia FROM denuncias ORDER BY data_denuncia DESC LIMIT 1"
        )
        if (!result.rows || result.rows.length === 0) {
            return res.json({ ultima: null })
        }
        const dataDenuncia = result.rows[0].data_denuncia
        // dataDenuncia pode ser Date ou string dependendo da configuração do pg
        const iso = dataDenuncia ? (dataDenuncia instanceof Date ? dataDenuncia.toISOString() : dataDenuncia) : null
        return res.json({ ultima: iso })
    } catch (err) {
        console.error(err.message)
        return res.status(500).json({ error: 'erro no servidor' })
    }
})


app.post("/usuariosRegistrar", async (req, res) => {
    try {
        const { email, senha_hash } = req.body
        if (!email || !senha_hash) {
            return res.status(400).json({ message: "Insira todos os campos" })
        }
        const usuarioExiste = await pool.query(
            "SELECT * FROM usuarios WHERE email = $1", [email]
        )
        if (usuarioExiste.rows.length > 0) {
            return res.status(400).json({ message: "Usuário já cadastrado" })
        }
        const senhaHash = await bcrypt.hash(senha_hash, 10)
        const novoUsuario = await pool.query(
            "INSERT INTO usuarios (email, senha_hash) VALUES ($1, $2) RETURNING *", [email, senhaHash])
        const token = generateToken(novoUsuario.rows[0].id)
        res.cookie('token', token, cookieOptions)
        return res.status(201).json({ usuario: novoUsuario.rows[0] })
    } catch (err) {
        console.error(err.message);

    }
})


app.post("/usuariosEntrar", async (req, res) => {
    try {
        const { email, senha_hash } = req.body
        if (!email || !senha_hash) {
            return res.status(400).json({ message: "Insira todos os campos" })
        }
        const usuario = await pool.query(
            "SELECT * FROM usuarios WHERE email = $1", [email])
        if (usuario.rows.length === 0) {
            return res.status(400).json({ message: "Credenciais inválidas" })
        }
        const userData = usuario.rows[0]
        const comparaSenha = await bcrypt.compare(senha_hash, userData.senha_hash)
        if (!comparaSenha) {
            return res.status(400).json({ message: "Credenciais inválidas" })
        }
        const token = generateToken(userData.id)
        res.cookie("token", token, cookieOptions)
        res.json({ usuario: { id: userData.id, email: userData.email } })
    } catch (err) {
        console.error(err.message);

    }
})


app.get("/me", protect, async (req, res) => {
    try {
        res.json(req.usuario)
    } catch (err) {
        console.error(err.message);

    }
})


app.post("/logout", async (req, res) => {
    try {
        res.cookie("token", "", { ...cookieOptions, maxAge: 1})
        res.json({ message: "Logout bem sucedido" })
    } catch (err) {
        console.error(err.message);
    }
})



app.get("/denuncias/:id", async (req, res) => {
    try {
        const { id } = req.params
        const umaDenuncia = await pool.query(
            "SELECT * FROM denuncias WHERE id = $1", [id]
        )
        res.json(umaDenuncia.rows[0])

    } catch (err) {
        console.error(err.message);
    }
})



app.put("/denuncias/:id", async (req, res) => {
    try {
        const { id } = req.params
        const { numero_telefone, instituicao, descricao, regiao } = req.body
        const atualizaDenuncia = await pool.query(
            "UPDATE denuncias SET numero_telefone = $1, instituicao = $2, descricao = $3, regiao = $4 WHERE id = $5",
            [numero_telefone, instituicao, descricao, regiao, id]
        )
        res.json("Denuncia atualizada")
    } catch (err) {
        console.error(err.message);
    }
})



app.delete("/denuncias/:id", async (req, res) => {
    try {
        const { id } = req.params
        const deletaDenuncia = await pool.query(
            "DELETE FROM denuncias WHERE id = $1",
            [id]
        )
        res.json("Denuncia deletada")
    } catch (err) {
        console.error(err.message);
    }
})




app.get("/denuncias/numero/:numero", async (req, res) => {
    try {
        const { numero } = req.params
        const denuncia = await pool.query(
            "SELECT * FROM denuncias WHERE numero_telefone = $1",
            [numero]
        );
        if (denuncia.rows.length === 0) {
            return res.json([])
        }
        res.json(denuncia.rows);
    } catch (err) {
        console.error(err.message);
    }
});



app.listen(5000, () => {
    console.log("Servidor rodando na porta 5000")
})