 const {Sequelize,DataTypes} = require('sequelize');
 const {sequelize }= require('./index');
 const Airport = require('../Api/Models/Airport.model');
 const Billing = require('../Api/Models/Billing.model')
 const Clients = require('../Api/Models/Clients.model')
 const Employees = require('../Api/Models/Employees.model')
 const Flights = require('../Api/Models/Flights.model')
 const Location = require('../Api/Models/Location.model')
 const Planes = require('../Api/Models/Planes.model');
 const Clients_flights = require('../Api/Models/Clients_flights.model');

/* const clients_fligths = sequelize.define('clients_flights', {
    billing_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Billing,
            key: 'id'
        }
    }
}, {
    timestamps: false
});

const employees_flights = sequelize.define('employees_flights', {
   employees_id:{ type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Employees,
            key: 'id'
        }
}}, {
    timestamps: false
}); */

 const initializeRelations = () =>{
    try{
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
    
    
    Airport.hasOne(Location, {
        foreignKey: {
            name: 'airport_id',
            allowNull: false,
        },
        onDelete: 'CASCADE'
    })
    
    Location.belongsTo(Airport, {
        foreignKey: {
            name: 'airport_id',
            allowNull: false,
        },
        onDelete: 'CASCADE'
    })
    
    
    
    Clients.belongsToMany(Flights, {through:"Clients_flights", });
    Flights.belongsToMany(Clients, {through:"Clients_flights", });
    
    Employees.belongsToMany(Flights,{through:"Employees_flights"});
    Flights.belongsToMany(Employees,{through:"Employees_flights"});
    
    Billing.hasOne(Clients_flights, {
        foreignKey: {
            name: 'billing_id',
            allowNull: false,
        },
        onDelete: 'CASCADE'
    })
    Clients_flights.belongsTo(Billing, {
        foreignKey: {
            name: 'billing_id',
            allowNull: false,
        },
        onDelete: 'CASCADE',
    })
}catch(error){
    console.log(error);
}
 }
 
module.exports = {initializeRelations}













