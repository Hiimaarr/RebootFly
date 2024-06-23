const { DataTypes } = require("sequelize");

const { sequelize } = require("../../Database/index");

const allowedDomains = (["gmail.com","outlook.com"])
const Users = sequelize.define(
  "Users",
  {
    name: { 
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    surname: {
      type: DataTypes.STRING(40),
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dni: {
      type: DataTypes.STRING(9),
      unique: true,
      allowNull: false,
      validate: {
        isDNI(value) {
          const dniPattern = /^[0-9]{8}[A-Z]$/;
          if (!dniPattern.test(value)) {
            throw new Error("El DNI debe tener 8 dígitos y un caracter");
          }
          const dniLetters = "TRWAGMYFPDXBNJZSQVHLCKE";
          const number = parseInt(value.slice(0, 8), 10);
          const letter = value[8];
          const correctLetter = dniLetters[number % 23];

          if (letter !== correctLetter) {
            throw new Error("La letra del DNI no es correcta.");
          }
        },
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          msg: "El correo electrónico no tiene un formato válido.",
        },
        len: {
          args: [5, 50],
          msg: "El correo electrónico debe tener entre 5 y 50 caracteres.",
        },
        isAllowedDomain(value) {
          const domain = value.split("@")[1];
          if (!allowedDomains.includes(domain)) {
            throw new Error(
              `El dominio del correo electrónico debe ser uno de los siguientes: ${allowedDomains.join(
                ", "
              )}.`
            );
          }
        },
      },
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "El número de teléfono no puede estar vacío",
        },
        is: {
          args: /^\d{9}$/,
          msg: "El número de teléfono debe contener exactamente 9 dígitos",
        },
      },
    },
    role: {
      type: DataTypes.ENUM("admin", "client"),
      allowNull: false,
      defaultValue:"client"
    },
  },
  { timestamps: false }
);

module.exports = Users;
