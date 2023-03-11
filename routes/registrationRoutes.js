const express = require('express')
const {registerScheme} = require('../controllers/registrationController.js')
const router = express.Router()

router.post('/', registerScheme)


module.exports = router;