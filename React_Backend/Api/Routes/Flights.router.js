const router = require("express").Router();
const { checkAvailableBooking } = require("../Middelware/auth");

const {
  getAllFlights,
  getOneFlights,
  updateFlights,
  deleteFlights,
  createFlights,
  updateBooking
} = require("../Controllers/Flights.controller");



router.get("", getAllFlights);
router.get("/:id", getOneFlights);
router.put("/:id", updateFlights);
router.delete("/:id", deleteFlights);
router.post("", createFlights);
router.patch("/:id",checkAvailableBooking,updateBooking)

module.exports = router;
