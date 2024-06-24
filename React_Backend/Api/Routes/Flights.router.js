const router = require("express").Router();

const {
  getAllFlights,
  getOneFlights,
  updateFlights,
  deleteFlights,
  createFlights,
createFlightsInBulk
} = require("../Controllers/Flights.controller");

router.get("", getAllFlights);
router.get("/:id", getOneFlights);
router.put("/:id", updateFlights);
router.delete("/:id", deleteFlights);
router.post("", createFlights);
router.post("/bulk-flight", createFlightsInBulk)

module.exports = router;
