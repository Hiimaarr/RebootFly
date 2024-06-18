const {DataTypes}=require('sequelize')

const {sequelize}=require('../../Database/index')

const Flights = sequelize.define('Flights',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    departure_time:{
        type: DataTypes.TIME
    },
    arrival_time:{
        type:DataTypes.TIME
    },
    status:{
        type: DataTypes.ENUM('pending','in_progress','completed'),
        allowNull: false
    }

},{timestamps:false})

module.exports=Flights

