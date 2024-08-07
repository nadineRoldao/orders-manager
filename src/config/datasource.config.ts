import mysql from 'mysql2'
import { Pool } from 'mysql2/promise'

export class DatasourceConfig {

    readonly connection: Pool

    constructor() {
        const connectionPool = mysql.createPool({
            host: '192.168.176.2',
            port: 3306,
            user: 'root',
            password: 'root',
            database: 'db_ecommerce',

            // só copiar
            waitForConnections: true,
            connectionLimit: 10,
            maxIdle: 10, 
            idleTimeout: 60000, 
            queueLimit: 0,
            enableKeepAlive: true,
            keepAliveInitialDelay: 0      
        })

        this.connection = connectionPool.promise()
    }

}