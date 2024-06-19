const {Sequelize} = require ('sequelize')

const sequelize = new Sequelize("DBrebootFly", "david", "reboot", {
    host: "localhost",
    dialect: 'mysql',
    port: 3306,
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

async function syncModels(value){
    const state = {
        alter: {alter: true},
        force: {force: true},
    }

    try {
        await sequelize.sync(state[value] || '')
        console.log(`All models synchronized using ${JSON.stringify(state[value]) || ''}`)
    } catch (error) {
        throw error
    }
}

module.exports = {sequelize,checkConnection,syncModels}