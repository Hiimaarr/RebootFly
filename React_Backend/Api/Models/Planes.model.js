const {DataTypes}=require('sequelize')

const {sequelize}=require('../../Database/index')

const Planes = sequelize.define('Planes',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    reference:{
        type: DataTypes.STRING(9),
        allowNull: false,
        unique:true,
    },
    user_capacity:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    bag_capacity:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    status:{//available refers to space free for clients
        type: DataTypes.ENUM("full", "available"),
        allowNull: false,

    },

},{timestamps:false})

module.exports=Planes

