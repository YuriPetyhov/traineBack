const express = require('express');

const authConttroles = require('../controllers/auth')

const router = express.Router()

// router.get('/', authConttroles.getSign)
router.post('/', authConttroles.postSign)


module.exports = router
