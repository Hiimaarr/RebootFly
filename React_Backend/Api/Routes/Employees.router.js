const router = require('express').Router();
const {getAllEmployees, getOneEmployee, updateEmployee,deleteEmployee,createEmployee} = require('../Controllers/Employees.controllers')


router.get('', getAllEmployees);
router.get('/:id', getOneEmployee);
router.put('/:id', updateEmployee)
router.delete('/:id',deleteEmployee)
router.post('',createEmployee)

module.exports = router;