const {Sequelize} = require ('sequelize')

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: process.env.DIALECT,
    port: process.env.DB_PORT,
    logging: false,
})

async function checkConnection(){
    try {
        await sequelize.authenticate()
        console.log('Connection successful')
    } catch (error) {
        throw error
    }
}

module,exports = {sequelize,checkConnection}