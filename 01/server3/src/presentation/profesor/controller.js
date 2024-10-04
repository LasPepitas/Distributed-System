import { pool } from '../../config/db.js'

export class ProfesorController {
    constructor() {}

    // Asegúrate de hacer el método async
    registerProfesor = async (req, res) => {
        try {
            const {
                nombre,
                apellido,
                email,
                telefono,
                fechaContratacion,
                departamentoId
            } = req.body

            const query =
                'INSERT INTO profesores (nombre, apellido, email, telefono, fecha_contratacion, departamento_id) VALUES (?, ?, ?, ?, ?, ?)'
            const values = [
                nombre,
                apellido,
                email,
                telefono,
                fechaContratacion,
                departamentoId
            ]

            // Usa await para esperar la resolución de la promesa
            await pool.query(query, values)
            res.json({ message: 'Profesor registrado' })
        } catch (error) {
            console.error(error)
            res.status(500).json({ error: 'Error al registrar el profesor' })
        }
    }

    getProfesors = async (req, res) => {
        try {
            const query = 'SELECT * FROM profesores'

            // Asegúrate de usar await y que devuelva las filas correctamente
            const [rows] = await pool.query(query)

            // Verifica que las filas realmente sean un array
            if (!rows || !Array.isArray(rows)) {
                throw new Error('No se pudo obtener los profesores')
            }

            res.json(rows)
        } catch (error) {
            console.error(error)
            res.status(500).json({ error: 'Error al obtener los profesores' })
        }
    }

    getProfesorById = async (req, res) => {
        try {
            const { id } = req.params
            const query = 'SELECT * FROM profesores WHERE id = ?'

            // Usa await para esperar la resolución de la promesa
            const [rows] = await pool.query(query, [id])
            res.json(rows)
        } catch (error) {
            console.error(error)
            res.status(500).json({ error: 'Error al obtener el profesor' })
        }
    }

    updateProfesor = async (req, res) => {
        try {
            const { id } = req.params
            const {
                nombre,
                apellido,
                email,
                telefono,
                fechaContratacion,
                departamentoId
            } = req.body

            const query =
                'UPDATE profesores SET nombre = ?, apellido = ?, email = ?, telefono = ?, fecha_contratacion = ?, departamento_id = ? WHERE id = ?'
            const values = [
                nombre,
                apellido,
                email,
                telefono,
                fechaContratacion,
                departamentoId,
                id
            ]

            // Usa await para esperar la resolución de la promesa
            await pool.query(query, values)
            res.json({ message: 'Profesor actualizado' })
        } catch (error) {
            console.error(error)
            res.status(500).json({ error: 'Error al actualizar el profesor' })
        }
    }

    deleteProfesor = async (req, res) => {
        try {
            const { id } = req.params
            const query = 'DELETE FROM profesores WHERE id = ?'

            // Usa await para esperar la resolución de la promesa
            await pool.query(query, [id])
            res.json({ message: 'Profesor eliminado' })
        } catch (error) {
            console.error(error)
            res.status(500).json({ error: 'Error al eliminar el profesor' })
        }
    }
}
