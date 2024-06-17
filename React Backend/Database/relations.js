 const Airport = require('../Api/Models/Airport.model')
 const Billing = require('../Api/Models/Billing.model')
 const Clients = require('../Api/Models/Clients.model')
 const Employees = require('../Api/Models/Employees.model')
 const Flights = require('../Api/Models/Flights.model')
 const Location = require('../Api/Models/Location.model')
 const Planes = require('../Api/Models/Planes.model')

 const initializeRelations = () =>{
    try{

    }catch(error){
        console.log(error);
    }
 }

 Planes.hasOne(Flights,{
    foreignKey:{
        name:'plane_id',
        allowNull:false
    },
    onDelete:'CASCADE'
 })
 Flights.hasMany(Planes,{
    foreignKey:'plane_id'
 })
Clients.hasOne(Flights,{
    foreignKey:{
        name:'client_id',
        allowNull:false
    },
    onDelete:'CASCADE'
 })
Flights.hasMany(Clients,{
    foreignKey:'client_id'
 })
Location.hasOne(Flights,{
    foreignKey:{
        name:'departure_airport_id',
        allowNull:false
    },
    onDelete:'CASCADE'
 })
Flights.hasMany(Location,{
    foreignKey:'departure_airport_id'
 })
Location.hasOne(Flights,{
    foreignKey:{
        name:'arrival_airport_id',
        allowNull:false
    },
    onDelete:'CASCADE'
 })
Flights.hasMany(Location,{
    foreignKey:'arrival_airport_id'
 })








