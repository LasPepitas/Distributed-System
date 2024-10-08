import express from 'express'
import cors from 'cors'
export class Server {
    app = express()
    port
    routes
    constructor(option) {
        const { port = 3100, routes } = option
        this.port = port
        this.routes = routes
    }
    async start() {
        this.app.use(express.json())
        // all cors
        this.app.use(cors())

        this.app.use(this.routes)
        this.app.listen(this.port, () => {
            console.log('Server is running on port ' + this.port)
        })
    }
}
