const Airport = require("../Api/Models/Airport.model");
const Bookings = require("../Api/Models/Bookings.model");
const Users = require("../Api/Models/Users.model");
const Flights = require("../Api/Models/Flights.model");
const Location = require("../Api/Models/Location.model");

//reviuew in case we need to import intermediate tables

function addRelationsToModels() {
  try {
    console.log("Relations added to all models");
  } catch (error) {
    throw error;
  }
}

module.exports = { addRelationsToModels };
