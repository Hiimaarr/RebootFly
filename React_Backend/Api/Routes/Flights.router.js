const router = require("express").Router();

const {
  getAllFlights,
  getOneFlights,
  updateFlights,
  deleteFlights,
  createFlights,
  searchFlights,
  getFlightDates,
  createFlightsInBulk
} = require("../Controllers/Flights.controller");

router.get("/", getAllFlights);
router.post("/search",searchFlights);

router.get("/:id", getOneFlights);
router.put("/:id", updateFlights);
router.delete("/:id", deleteFlights);
router.post("", createFlights);  
router.post("/bulk-flight", createFlightsInBulk);  

//search flights


//flight dates

router.get("/search/dates", getFlightDates)
module.exports = router;
