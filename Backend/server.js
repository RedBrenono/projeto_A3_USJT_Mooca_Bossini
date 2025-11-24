const express = require("express")
const app = express()
const cors = require("cors")
const pool = require("./db")

//middleware
app.use(cors())
app.use(express.json())

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
        const {id} = req.params  
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
        const {id} = req.params     
        const deletaDenuncia = await pool.query(
            "DELETE FROM denuncias WHERE id = $1", 
            [id]
        )
        res.json("Denuncia deletada")
    } catch (err) {
        console.error(err.message);
    }
})



app.post("/usuarios", async (req, res) => {
    try {
        const {email, senha_hash} = req.body
        const novoUsuario = await pool.query(
            "INSERT INTO usuarios (email, senha_hash) VALUES ($1, $2) RETURNING * ", [email, senha_hash]
        )
        res.json(novoUsuario.rows[0])
    } catch (err) {
        console.error(err.message);
        
    }
})



app.get("/denuncias/numero/:numero", async (req, res) => {
  try {
    const { numero } = req.params;
    const denuncia = await pool.query(
      "SELECT * FROM denuncias WHERE numero_telefone = $1",
      [numero]
    );
    res.json(denuncia.rows);
  } catch (err) {
    console.error(err.message);
  }
});



app.listen(5000, () => {
    console.log("Servidor rodando na porta 5000")
})