const router = require('express').Router()
const { signUp, login } = require('../Controllers/auth.controller')

router.post('/signup', signUp)
router.post('/login', login)


module.exports = router