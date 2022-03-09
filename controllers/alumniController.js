const Alumni = require('../models/alumniModel')
const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')


// Description: Register route is POST method to /api/alumni/signup
const registerAlumni = asyncHandler ( async (req,res) => {
    const {name, personal_email,password,name_of_institute,year_of_admission,year_of_passing_out,mobile_number,current_city} = req.body

    if(!name || !personal_email || !password || !name_of_institute || !year_of_admission || !year_of_passing_out || !mobile_number || !current_city) {
        res.status(400)
        throw new Error('Please enter all the mandatory fields')
    }

    // Check if Alumni user already registered
    const userExists = await Alumni.findOne({personal_email})
    if (userExists) {
        res.status(400)
        throw new Error('User already exists')
    }

    // Hash Password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // Create User
    const alumni = await Alumni.create({
        name,
        personal_email,
        password: hashedPassword,
        name_of_institute,
        year_of_admission,
        year_of_passing_out,
        mobile_number,
        current_city
    })

    if (alumni) {
        res.status(201).json({
            _id: alumni.id,
            name: alumni.name,
            name_of_institute: alumni.name_of_institute,
            year_of_admission: alumni.year_of_admission,
            year_of_passing_out: alumni.year_of_passing_out,
            mobile_number: alumni.mobile_number,
            current_city: alumni.current_city
        })
    }

    // res.status(201).json({message: 'Alumni registered'})
})


// Description: Login route is POST method to /api/alumni/login
const loginAlumni = asyncHandler ( async (req,res) => {
    const {personal_email, password} = req.body

    // Check for alumni user email
    const alumniUser = await Alumni.findOne({personal_email})

    // if(!alumniUser) {
    //     res.status(400)
    //     throw new Error('User does not exists')
    // }

    if(alumniUser && (await bcrypt.compare(password, alumniUser.password))) {
        res.status(200).json({
            id: alumniUser._id,
            name: alumniUser.name,
            personal_email: alumniUser.personal_email,
            name_of_institute: alumniUser.name_of_institute,
            year_of_admission: alumniUser.year_of_admission,
            year_of_passing_out: alumniUser.year_of_admission,
            mobile_number: alumniUser.mobile_number,
            current_city: alumniUser.current_city
        })
    } else {
        res.status(400)
        throw new Error('Invalid data entered!')
    }
})


// Description: Get Alumni data route is GET method to /api/alumni/me
const getAlumni = asyncHandler ( async (req,res) => {
    res.status(200).json({message: 'Alumni info'})
})

module.exports = {getAlumni, registerAlumni,loginAlumni}