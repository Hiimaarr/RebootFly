const router = require("express").Router();

router.use("/Airport", require("./Airport.router"));
router.use("/Flights", require("./Flights.router"));
router.use("/Bookings", require("./Bookings.router"));
router.use("/Location", require("./Location.router"));
router.use("/Users", require("./Users.router"));
router.use("/auth", require("./auth.router"));

/*router.use("/FlightBooking", require("./FlightBookings.router"))*/

module.exports = router;
