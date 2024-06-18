const {DataTypes}=require('sequelize')

const {sequelize}=require('../../Database/index')

const clients_flights = sequelize.define('Clients_flights',{ 

/*     billingId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE'
    } */
   
}, {timestamps:false})

module.exports = clients_flights;