const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("./index");
const Airport = require("../Api/Models/Airport.model");
const Bookings = require("../Api/Models/Bookings.model");
const Flights = require("../Api/Models/Flights.model");
const Location = require("../Api/Models/Location.model");
const Users = require("../Api/Models/Users.model");

const initializeRelations = () => {
  try {
    Airport.hasMany(Flights);
    Flights.belongsTo(Airport);

    Airport.hasOne(Location);
    Airport.belongsTo(Location);

    Bookings.belongsToMany(Flights, { through: "Flight_bookings" });
    Flights.belongsToMany(Bookings, { through: "Flight_bookings" });

    Bookings.hasMany(Users);
    Bookings.belongsTo(Users);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { initializeRelations };
