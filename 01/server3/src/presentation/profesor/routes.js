import { Router } from 'express'
import { ProfesorController } from './controller.js'
export class ProfesorRoutes {
    static get routes() {
        const router = Router()
        const controller = new ProfesorController()
        router.post('/', controller.registerProfesor)
        router.get('/', controller.getProfesors)
        router.get('/:id', controller.getProfesorById)
        router.put('/:id', controller.updateProfesor)
        router.delete('/:id', controller.deleteProfesor)

        return router
    }
}
