const { DataTypes } = require("sequelize");

const { sequelize } = require("../../Database/index");

const Flight = sequelize.define(
  "Flight",
  {
    code: {
      type: DataTypes.STRING(6),
      unique: true,
    },
    departure_time: {
      type: DataTypes.DATE,
    },
    arrival_time: {
      type: DataTypes.DATE,
    },
    status: {
      type: DataTypes.ENUM("canceled", "full", "available"),
      allowNull: false,
    },
    capacity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    occupiedPlaces: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { timestamps: false }
);

module.exports = Flight;
