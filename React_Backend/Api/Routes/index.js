const router = require('express').Router();

router.use('/Airport', require('./Airport.router'));
router.use("/Flights", require("./Flights.router"));
router.use("/Location", require("./Location.router"));

module.exports = router;