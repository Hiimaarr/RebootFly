const router = require('express').Router();
const {getAllClients, getOneClient, updateClient,deleteClient,createClient} = require('../Controllers/Client.controllers')


router.get('', getAllClients);
router.get('/:id', getOneClient);
router.put('/:id', updateClient)
router.delete('/:id',deleteClient)
router.post('',createClient)

module.exports = router;