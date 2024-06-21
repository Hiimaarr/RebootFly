const router = require("express").Router();

const {
  getAllFlightBookings,
  getOneFlightBooking,
  updateFlightBooking,
  createBookingFromFlightBooking,
  deleteBookingAndSeatsFromFlightBooking,
} = require("../Controllers/FlightBookings.controller");

router.get("", getAllFlightBookings);
router.get("/:id", getOneFlightBooking);
router.put("/:id", updateFlightBooking);
router.delete("/:id", createBookingFromFlightBooking);
router.post("", deleteBookingAndSeatsFromFlightBooking);

module.exports = router;
