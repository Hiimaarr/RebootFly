const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("./index");
const Airport = require("../Api/Models/Airport.model");
const Billing = require("../Api/Models/Billing.model");
const Clients = require("../Api/Models/Clients.model");
const Employees = require("../Api/Models/Employees.model");
const Flights = require("../Api/Models/Flights.model");
const Location = require("../Api/Models/Location.model");
const Planes = require("../Api/Models/Planes.model");
const Clients_flights = require("../Api/Models/Clients_flights.model");
const Employees_flights = require("../Api/Models/Employees_flights.model");

const initializeRelations = () => {
  try {
    Planes.hasMany(Flights);
    Flights.belongsTo(Planes);

    Location.hasMany(Flights);
    Flights.belongsTo(Location);

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
