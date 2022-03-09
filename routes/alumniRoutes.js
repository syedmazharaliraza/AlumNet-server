const express = require('express')
const router = express.Router()
const {getAlumni, registerAlumni, loginAlumni} = require('../controllers/alumniController')

router.get('/me', getAlumni)
router.post('/signup', registerAlumni)
router.post('/login', loginAlumni)

module.exports = router