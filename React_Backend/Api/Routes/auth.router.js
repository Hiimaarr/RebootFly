const router = require('express').Router()
const { signUp, login } = require('../Controllers/auth.controllers')

router.post('/signup', signUp)
router.post('/login', login)


module.exports = router