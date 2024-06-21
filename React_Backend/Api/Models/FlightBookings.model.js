const { DataTypes } = require("sequelize");

const { sequelize } = require("../../Database/index");

const FlightBookings = sequelize.define(
  "FlightBookings",
  {
  },
  { timestamps: false }
);

module.exports = FlightBookings;
