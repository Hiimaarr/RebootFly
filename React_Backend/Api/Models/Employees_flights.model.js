const {DataTypes}=require('sequelize')

const {sequelize}=require('../../Database/index')

const employees_flights = sequelize.define('Employees_flights',{ 
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    }
/*     billingId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE'
    } */
   
}, {timestamps:false})

module.exports = employees_flights;