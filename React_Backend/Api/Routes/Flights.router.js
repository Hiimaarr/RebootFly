const router = require("express").Router();
const { checkAvailableBooking } = require("../Middelware/auth");

const {
  getAllFlights,
  getOneFlights,
  updateFlights,
  deleteFlights,
  createFlights,
  createFlightsInBulk,
  searchFlight
} = require("../Controllers/Flights.controller");



router.get("", getAllFlights);
router.get("/:id", getOneFlights);
router.put("/:id", updateFlights);
router.delete("/:id", deleteFlights);
router.post("", createFlights);
router.post("/bulk-flight", createFlightsInBulk)
router.get("/:",searchFlight)// Creo que hay que poner el filtro de la búsqueda (?)

module.exports = router;
