export class RegisterProfesorDto{
    constructor(
        email,
        nombre,
    )
    registerProfesor = (req, res) => {
        res.json({ message: 'Profesor registered' })
    }
}