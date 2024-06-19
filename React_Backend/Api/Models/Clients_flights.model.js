const {DataTypes}=require('sequelize')

const {sequelize}=require('../../Database/index')

const clients_flights = sequelize.define('Clients_flights',{ 
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

module.exports = clients_flights;