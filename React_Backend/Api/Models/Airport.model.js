const { DataTypes } = require("sequelize");

const { sequelize } = require("../../Database/index");

const Airport = sequelize.define(
  "Airport",
  {
    name: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
  },
  { timestamps: false }
);

module.exports = Airport;
