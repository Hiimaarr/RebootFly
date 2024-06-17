require('dotenv').config()
const {syncModels,checkConnection} = require('./Database/index')
/* const {addRelationsToModels} = require('./Database/models') */
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

async function checkAndSyncSQL() {
    await checkConnection()
    /* addRelationsToModels() */
    await syncModels()
}
const port = 3000 
function initAndListen(){
    try{
    const app = express()
    .use(cors())
    .use(express.json())
    .use(morgan('dev'))
    /* .use('/api', require('./Api/Routes')) */
    .listen(port, () => {
        console.log(`Listening on port ${port}`)
    })
    }catch(error){
        console.log(error);
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
