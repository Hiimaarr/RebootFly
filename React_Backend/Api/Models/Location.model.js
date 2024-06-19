const {DataTypes}=require('sequelize')

const {sequelize}=require('../../Database/index')

const Location = sequelize.define('Location',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    departure_airport:{
        type: DataTypes.STRING(20),
        allowNull: false,
    },
    arrival_airport:{
        type: DataTypes.STRING(20),
        allowNull: false,
    }

},{timestamps:false})

module.exports=Location

