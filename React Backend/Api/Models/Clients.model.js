const {DataTypes}=require('sequelize')

const {sequelize}=require('../../Database/index')

const Clients = sequelize.define('Clients',{
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
    },
    password:{
        type: DataTypes.STRING(20),
        allowNull: false,

    },
    dni: {
        type: DataTypes.STRING(9),
    },
    status:{
        type: DataTypes.ENUM('blocked','active'),
        allowNull: false
    }

},/* {updatedAt:false, timestamps:false} */)

module.exports=Clients

