import { Router } from 'express'
import { ProfesorRoutes } from './profesor/routes.js'

export class AppRoutes {
    static get routes() {
        const router = Router()

        router.use('/api/profesor', ProfesorRoutes.routes)
        router.use('/api', (req, res) => {
            res.json({ message: 'Welcome to the API' })
        })

        return router
    }
}
