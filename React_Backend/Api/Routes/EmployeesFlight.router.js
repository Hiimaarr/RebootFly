const router = require('express').Router();
const {getAllEmployeesFlight, getOneEmployeeFlight, updateEmployeeFlight,deleteEmployeeFlight,createEmployeeFlight} = require('../Controllers/EmployeesFlight.controllers')


router.get('',getAllEmployeesFlight);
router.get('/:id', getOneEmployeeFlight);
router.put('/:id', updateEmployeeFlight)
router.delete('/:id',deleteEmployeeFlight)
router.post('',createEmployeeFlight)

module.exports = router;