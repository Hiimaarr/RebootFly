const router = require('express').Router();

router.use('/Airport', require('./Airport.router'));
router.use("/Flights", require("./Flights.router"));

module.exports = router;