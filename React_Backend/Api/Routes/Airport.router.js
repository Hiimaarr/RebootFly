const router = require('express').Router();
const {getAllAirports, getOneAirport, updateAirport,deleteAirport,createAirport} = require('../Controllers/Airport.controllers')


router.get('', getAllAirports);
router.get('/:id', getOneAirport);
router.put('/:id', updateAirport)
router.delete('/:id',deleteAirport)
router.post('',createAirport)

module.exports = router;