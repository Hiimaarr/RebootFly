const router = require("express").Router();

const {
  getAllFlights,
  getOneFlights,
  updateFlights,
  deleteFlights,
  createFlights,
} = require("../Controllers/Flights.controller");

router.get("", getAllFlights);
router.get("/:id", getOneFlights);
router.put("/:id", updateFlights);
router.delete("/:id", deleteFlights);
router.post("", createFlights);

module.exports = router;
