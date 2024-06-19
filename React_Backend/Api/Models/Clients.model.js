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
        unique:true,

    },
    password:{
        type: DataTypes.STRING(20),
        allowNull: false,
    },
    dni: {
        type: DataTypes.STRING(9),
        unique:true,
        allowNull:false,
        validate: {
            isDNI(value) {
                const dniPattern = /^[0-9]{8}[A-Z]$/;
        if (!dniPattern.test(value)) {
          throw new Error('El DNI debe tener 8 dígitos y un caracter');
        };
        const dniLetters = 'TRWAGMYFPDXBNJZSQVHLCKE';
        const number = parseInt(value.slice(0, 8), 10);
        const letter = value[8];
        const correctLetter = dniLetters[number % 23];

        if (letter !== correctLetter) {
          throw new Error('La letra del DNI no es correcta.');
        }
            }
        }
    },
    status:{
        type: DataTypes.ENUM('blocked','active'),
        allowNull: false
    }

},{timestamps:false})

module.exports=Clients

