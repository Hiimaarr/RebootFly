const { DataTypes } = require("sequelize");

const { sequelize } = require("../../Database/index");

const Location = sequelize.define(
  "Location",
  {
    name: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(60),
      allowNull: false,
    },
  },
  { timestamps: false }
);

module.exports = Location;
