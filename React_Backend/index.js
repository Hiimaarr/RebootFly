require('dotenv').config()
const {sequelize, syncModels, checkConnection} = require('./Database/index')
const {initializeRelations} = require("./Database/relations")
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()


async function checkAndSyncSQL() {
    await checkConnection()
    initializeRelations() 
    await syncModels()
    
}
const port = 3000

const initAndListen = () => {
    try {
        app.use(express.json())
            .use(cors())
            .use(morgan('dev'))
            .listen(port, () => {
        console.log(`Server started ${port}`)
  })
    }catch (error) {
    console.log(error)
    }
}


async function startAPI(){
    try{
    await checkAndSyncSQL()
    initAndListen()
    }catch(error){
        console.log(error);
    }
}

startAPI()
