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
    Location.belongsTo(Airport);

    Clients.belongsToMany(Flights, { through: "Clients_flights" });
    Flights.belongsToMany(Clients, { through: "Clients_flights" });

    Employees.belongsToMany(Flights, { through: "Employees_flights" });
    Flights.belongsToMany(Employees, { through: "Employees_flights" });

    Billing.hasOne(Clients_flights);
    Clients_flights.belongsTo(Billing);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { initializeRelations };
