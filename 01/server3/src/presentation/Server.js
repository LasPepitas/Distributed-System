import express from 'express'
export class Server {
    app = express()
    port
    constructor(option) {
        const { port = 3100 } = option
        this.port = port
    }
    async start() {
        this.app.listen(this.port, () => {
            console.log('Server is running on port ' + this.port)
        })
    }
}
