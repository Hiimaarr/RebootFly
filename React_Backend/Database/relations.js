const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("./index");
const Airport = require("../Api/Models/Airport.model");
const Bookings = require("../Api/Models/Bookings.model");
const Flight = require("../Api/Models/Flights.model");
const Location = require("../Api/Models/Location.model");
const Users = require("../Api/Models/Users.model");
const FlighBookings = require("../Api/Models/FlightBookings.model");

/* const FlighBookings = sequelize.define(
  "Flight_bookings",
  {},
  {
    timestamps: false,
  }
); */

const initializeRelations = () => {
  try {
    //
    Location.hasOne(Airport);
    Airport.belongsTo(Location);

    //
    Airport.hasMany(Flight, {
      foreignKey: "arrivalAirportId",
      as: "arrivalFlights", // Alias para la relación
    });

    Airport.hasMany(Flight, {
      foreignKey: "departureAirportId",
      as: "departureFlights", // Alias para la relación
    });

    //
    Flight.belongsTo(Airport, {
      foreignKey: "arrivalAirportId",
      as: "arrivalAirport",
    });

    Flight.belongsTo(Airport, {
      foreignKey: "departureAirportId",
      as: "departureAirport",
    });

    //
    Flight.belongsToMany(Bookings, {
      through: FlighBookings,
    });

    Bookings.belongsToMany(Flight, {
      through: FlighBookings,
    });

    //
    Users.hasMany(Bookings);
    Bookings.belongsTo(Users);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { initializeRelations };
