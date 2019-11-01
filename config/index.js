require('dotenv').config();

const srvConfig = {
    port: process.env.PORT,
    dev:  process.env.NODE_ENV === 'development',
    jwtSecret: process.env.AUTH_JWT_SECRET
}

const dbConfig = {
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dbHost: process.env.DB_HOST,
    dbPort: process.env.DB_PORT,
    dbName: process.env.DB_NAME
}

module.exports = {
    srvConfig,
    dbConfig
}