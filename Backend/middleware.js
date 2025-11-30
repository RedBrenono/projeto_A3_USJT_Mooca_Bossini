import pool from './db.js'
import jwt from 'jsonwebtoken'

const protect = async (req, res, next) => {
    try {
        const token = req.cookies.token
        if (!token) {
            return res.status(401).json({ message: "Não autorizado" })
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const usuario = await pool.query(
            "SELECT * FROM usuarios WHERE id = $1", [decoded.id]
        )
        if (usuario.rows.length === 0) {
            return res.status(401).json({ message: "Não autorizado" })
        }
        req.usuario = usuario.rows[0]
        next()
    } catch (err) {
        console.error(err.message)
        res.status(401).json({ message: "Não autorizado" })
    }
}

export { protect } 