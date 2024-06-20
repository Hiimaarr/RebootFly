const { DataTypes } = require("sequelize");

const { sequelize } = require("../../Database/index");

const Flights = sequelize.define(
  "Flights",
  {
    departure_time: {
      type: DataTypes.DATE,
    },
    arrival_time: {
      type: DataTypes.DATE,
    },
    status: {
      type: DataTypes.ENUM("full", "available", "cancel"),
      allowNull: false,
    },
  },
  { timestamps: false }
);

module.exports = Flights;
