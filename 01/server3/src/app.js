import { envs } from './config/index.js'
import { AppRoutes } from './presentation/routes.js'
import { Server } from './presentation/Server.js'

async function main() {
    new Server({ port: envs.PORT, routes: AppRoutes.routes }).start()
}

main()
