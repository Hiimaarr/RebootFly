const router = require('express').Router();
const {getAllAirports} = require('../Controllers/Airport.controllers')

router.get('', getAllAirports);

module.exports = router;