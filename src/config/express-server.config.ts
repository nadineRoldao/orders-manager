import bodyParser from 'body-parser'
import express from 'express'
import { Express } from 'express-serve-static-core'
import { RoutesRegistryConfig } from './routes-registry.config'

export class ExpressServerConfig {
    private app: Express
    private readonly PORT = process.env.APP_PORT || 3000
    private routesRegistryConfig: RoutesRegistryConfig
    
    constructor() {
        this.app = express()
        this.routesRegistryConfig = new RoutesRegistryConfig(this.app)
    }

    basicConfig(): ExpressServerConfig {
        this.app.use(bodyParser.json())
        this.app.use(bodyParser.urlencoded({ extended: false }))
        return this
    }

    routesRegistry(): ExpressServerConfig {
        this.app.use(function(req, res, next) {
            res.header('Access-Control-Allow-Origin', '*')
            res.header("Access-Control-Allow-Headers", '*')
            next()
        })

        this.routesRegistryConfig.register()

        return this
    }

    startServer(): void {
        this.app.listen(this.PORT, () => {
            console.log('server is connected on port:', this.PORT)
        })
    }

}
