const {DataTypes}=require('sequelize')

const {sequelize}=require('../../Database/index')

const Employees = sequelize.define('Employees',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type: DataTypes.STRING(20),
        allowNull: false,
    },
    surname:{
        type: DataTypes.STRING(30),
        allowNull: false,
    },
    username:{
        type: DataTypes.STRING(20),
        allowNull: false,
        unique:true
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    category:{
        type: DataTypes.ENUM("Pilot", "attendant"),
        allowNull: false,
    },
    status:{
        type: DataTypes.ENUM('blocked','active'),
        allowNull: false
    }

},{timestamps:false})

module.exports=Employees