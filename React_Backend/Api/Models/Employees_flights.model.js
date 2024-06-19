const {DataTypes}=require('sequelize')

const {sequelize}=require('../../Database/index')

const Employees_flights = sequelize.define('Employees_flights',{ 
    id: {
        type: DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
    }
}, {timestamps:false})

module.exports = Employees_flights;