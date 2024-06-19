const router = require('express').Router();

router.use('/Airport', require('./Airport.router'));



router.use('/Billing', require('./Billing.router'))
router.use('/Clients_flights', require('./Clients_flights.router'))

module.exports = router;