const router = require('express').Router();

router.use('/Airport', require('./Airport.router'));
router.use('/Clients', require('./Clients.router'));
router.use('/Employees',require('./Employees.router'))
router.use('/EmployeesFlights',require('./EmployeesFlight.router'))

module.exports = router;