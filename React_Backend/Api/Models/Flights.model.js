const { DataTypes } = require("sequelize");

const { sequelize } = require("../../Database/index");

const Flight = sequelize.define(
  "Flight",
  {
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
  },
  { timestamps: false }
);

module.exports = Flight;
