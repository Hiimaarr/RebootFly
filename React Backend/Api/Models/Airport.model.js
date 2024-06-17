const {DataTypes}=require('sequelize')

const {sequelize}=require('../../Database/index')

const Airport = sequelize.define('Airport',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type: DataTypes.STRING(20),
        allowNull: false,
    }

},/* {updatedAt:false, timestamps:false} */)

module.exports=Airport;

