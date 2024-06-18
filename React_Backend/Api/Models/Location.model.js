const {DataTypes}=require('sequelize')

const {sequelize}=require('../../Database/index')

const Location = sequelize.define('Location',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type: DataTypes.STRING(20),
        allowNull: false,
    },
    description:{
        type: DataTypes.STRING,
        allowNull: false,
    }

},{timestamps:false})

module.exports=Location

