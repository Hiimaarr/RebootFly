const router = require('express').Router();
const {getAllAirports, getOneAirport, updateAirport,deleteAirport,createAirport, createAirportInBulk} = require('../Controllers/Airport.controller')

router.get('', getAllAirports);
router.get('/:id', getOneAirport);
router.put('/:id', updateAirport);
router.delete('/:id',deleteAirport);
router.post('',createAirport);
router.post('/bulk-create-airport', createAirportInBulk)

module.exports = router;