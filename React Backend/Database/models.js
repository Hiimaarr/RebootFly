 const Airport = require('../Api/Models/Airport.model')
 const Billing = require('../Api/Models/Billing.model')
 const Clients = require('../Api/Models/Clients.model')
 const Employees = require('../Api/Models/Employees.model')
 const Flights = require('../Api/Models/Flights.model')
 const Location = require('../Api/Models/Location.model')
 const Planes = require('../Api/Models/Planes.model')

function addRelationsToModels() {
    try {
    
        console.log('Relations added to all models')
    } catch (error) {
        throw error
    }
}

module.exports = { addRelationsToModels }  