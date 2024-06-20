const router = require('express').Router()
const { getAllClients_flights, createClients_flights, getOneClient_flight, updateClient_flight, deleteClient_flight, getFlightByPK } = require('../Controllers/Clients_flights.controllers')

router.get('', getAllClients_flights);
router.get('/:id', getOneClient_flight);
router.get('/client/:id',getFlightByPK)
router.put('/:id', updateClient_flight);
router.delete('/:id', deleteClient_flight);
router.post('', createClients_flights);



module.exports = router;