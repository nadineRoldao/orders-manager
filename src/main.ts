import dotenv from 'dotenv'
import { Container } from './config/container.config'
import { ExpressServerConfig } from './config/express-server.config'

// load envVars
dotenv.config()

// injecao de dependencia
const container = Container.getInstance()
container.register()

const expressServer = new ExpressServerConfig()
expressServer
    .basicConfig()
    .routesRegistry()
    .startServer()
