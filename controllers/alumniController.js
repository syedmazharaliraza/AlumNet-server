const Alumni = require('../models/alumniModel')
const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const registerAlumni = asyncHandler ( async (req,res) => {
    const {name, personal_email,password,name_of_institute,year_of_admission,year_of_passing_out,mobile_number,current_city} = req.body

    if(!name || !personal_email || !password || !name_of_institute || !year_of_admission || !year_of_passing_out || !mobile_number || !current_city) {
        res.status(400)
        throw new Error('Please enter all the mandatory fields')
    }

    // Check if Alumni user already registered
    const userExists = await Alumni.findOne({personal_email})

    if(userExists) {
        res.status(400)
        throw new Error('User already exists with this email')
    }

    
    // Hash the password
    const salt = bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // Create the Alumni user
    const alumniUser = await Alumni.create({
        name,
        personal_email,
        password: hashedPassword,
        name_of_institute,
        year_of_admission,
        year_of_passing_out,
        mobile_number,
        current_city
    })

    if(alumniUser) {
        res.status(201).json({
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
        throw new Error('Inavlid user data')
    }
})

const loginAlumni = asyncHandler ( async (req,res) => {
    const {email, password} = req.body

    // Check for alumni user email
    const alumniUser = await Alumni.findOne({email})

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

const getAlumni = asyncHandler ( async (req,res) => {
    res.status(200).json({message: 'Alumni Info'})
})

module.exports = {getAlumni, registerAlumni,loginAlumni}