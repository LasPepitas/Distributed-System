import express from 'express'
import mysql from 'mysql2/promise'
export const connection = await mysql.createConnection({
    host: '192.250.227.17',
    user: 'endogast_vic',
    database: 'endogast_system',
    password: 'fRLRo!=&cl$e'
})

// test connection

connection.connect((err) => {
    if (err) {
        console.log(err)
        return
    }
    console.log('Connected to MySQL')
})
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
        this.app.use(this.routes)
        this.app.listen(this.port, () => {
            console.log('Server is running on port ' + this.port)
        })
    }
}
