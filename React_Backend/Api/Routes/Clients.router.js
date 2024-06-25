const router = require('express').Router();
const {getAllClients, getOneClient, updateClient,deleteClient,createClient} = require('../Controllers/Client.controllers');
const { checkAuth, checkAdmin } = require('../Middelware/auth');


router.get('', checkAuth, checkAdmin,getAllClients);
router.get('/:id', checkAuth, checkAdmin,getOneClient);
router.put('/:id', checkAuth, checkAdmin, updateClient)
router.delete('/:id', checkAuth, checkAdmin, deleteClient)
router.post('', checkAuth, checkAdmin, createClient)

module.exports = router;
