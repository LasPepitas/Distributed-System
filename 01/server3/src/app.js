import { envs } from './config/index.js'
import { Server } from './presentation/Server.js'

async function main() {
    new Server({ port: envs.PORT }).start()
}

main()
