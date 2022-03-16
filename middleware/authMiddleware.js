const Alumni = require('../models/alumniModel')
const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')

const protectRoute = asyncHandler ( async (req,res,next) => {
    let token

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            // Get token from header
            token = req.headers.authorization.split(' ')[1]

            // Verify token using JWT
            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            // Get user using token
            req.user = decoded

            next()
        } catch (error) {
            console.log(error)
            res.status(401)
            throw new Error('Not authorized')
        }
    }
})

module.exports = {protectRoute}