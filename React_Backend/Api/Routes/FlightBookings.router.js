const router = require("express").Router();

const {
  getAllFlightBookings,
 /*  getOneFlightBooking, */
  updateFlightBooking,
  createBookingAndIncreaseOcuppiedSeatsFromFlightBooking,
  deleteBookingAndSeatsFromFlightBooking,
} = require("../Controllers/FlightBookings.controller");

router.get("", getAllFlightBookings);
/* router.get("/:id", getOneFlightBooking); */
router.put("/:id", updateFlightBooking);
router.post("/:id", createBookingAndIncreaseOcuppiedSeatsFromFlightBooking);
router.delete("/:id", deleteBookingAndSeatsFromFlightBooking);

module.exports = router;
