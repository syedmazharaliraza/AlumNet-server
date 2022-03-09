const express = require('express')
const router = express.Router()
const {getAlumni, registerAlumni} = require('../controllers/alumniController')

router.get('/', getAlumni)
router.post('/signup', registerAlumni)

module.exports = router