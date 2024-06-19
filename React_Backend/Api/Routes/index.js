const router = require('express').Router();

router.use('/Airport', require('./Airport.router'));
router.use("/Flights", require("./Flights.router"));
router.use("/Planes", require("./Planes.router"));
router.use("/Location", require("./Location.router"));



router.use('/Billing', require('./Billing.router'))
router.use('/Clients_flights', require('./Clients_flights.router'))

module.exports = router;