const router = require("express").Router();

const {
  getAllFlights,
  getOneFlights,
  updateFlights,
  deleteFlights,
  createFlights,
  searchFlights,
  getFlightDates
} = require("../Controllers/Flights.controller");

router.get("", getAllFlights);
router.get("/:id", getOneFlights);
router.put("/:id", updateFlights);
router.delete("/:id", deleteFlights);
router.post("", createFlights);  

//search flights

router.get("/search",searchFlights)

//flight dates

router.get("/search/dates", getFlightDates)
module.exports = router;
