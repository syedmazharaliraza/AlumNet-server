const User = require('../models/userModel')
const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')


// POST request
// Will hit on Sign up page
//Route --> /users/signup
const registerUser = asyncHandler ( async (req,res) => {})


// POST request
// Will hit on Login in page
//Route --> /users/login
const loginUser = asyncHandler ( async (req,res) => {})


// Get request
// Will hit on dashboard page
//Route --> /users/me
const getme = asyncHandler ( async (req,res) => {})


// POST request
// Will hit on Logout option
//Route --> /users/logout
const logoutUser = asyncHandler ( async (req,res) => {})


module.exports = {registerUser, loginUser, getme, logoutUser}