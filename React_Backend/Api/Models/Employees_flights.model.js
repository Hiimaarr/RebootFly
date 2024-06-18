const {DataTypes}=require('sequelize')

const {sequelize}=require('../../Database/index')

const employees_flights = sequelize.define('Employees_flights',{ 

/*     billingId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE'
    } */
   
}, {timestamps:false})

module.exports = employees_flights;