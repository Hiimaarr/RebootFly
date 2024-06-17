const {DataTypes}=require('sequelize')

const {sequelize}=require('../../Database/index')

const Billing = sequelize.define('Billings',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    bank_account:{
        type: DataTypes.STRING(10),
        allowNull: false,
    },
    payment_method:{
        type: DataTypes.ENUM("PayPal", "Visa", "Bizum", "Mastercard"),
        allowNull: false,
    },
    status:{
        type: DataTypes.ENUM('paid',"pending", "canceled"),
        allowNull: false
    }

},/* {updatedAt:false, timestamps:false} */)

module.exports=Billing

