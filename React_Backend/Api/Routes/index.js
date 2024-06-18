const router = require('express').Router();

router.use('/Airport', require('./Airport.router'));

module.exports = router;