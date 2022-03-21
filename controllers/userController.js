const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// Function for generating token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
};

// POST request
// Will hit on Sign up page
//Route --> /users/signup
const registerUser = asyncHandler(async (req, res) => {
  const { email, name, password } = req.body;

  if (!email || !name || !password) {
    res.status(400);
    throw new Error("Please add all fields");
  }

  // Check if user exists
  const isUser = await User.findOne({ email });
  if (isUser) {
    res.status(400);
    throw new Error("User already exsists!");
  }

  // Hashing of password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Creating the user
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// POST request
// Will hit on Login in page
//Route --> /users/login
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Check if user exists
  const user = await User.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      name_of_institute: user.name_of_institute,
      gender: user.gender,
      mobile_number: user.mobile_number,
      course: user.course,
      branch: user.branch,
      year_of_admission: user.year_of_admission,
      year_of_passing_out: user.year_of_passing_out,
      working_experience: user.working_experience,
      skills: user.skills,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid credentials");
  }
});

// Get request
// Will hit on dashboard page
//Route --> /users/me
const getme = asyncHandler(async (req, res) => {
  res.status(200).json(req.user);
});

// Get request
// Will hit on home page
//Route --> /users/batchmates
const getBatchmates = asyncHandler(async (req, res) => {
  try {
    const { yearOfAdmission, yearOfPassingOut } = req.body;
    const batchmates = await User.find({
      $and: [
        { year_of_admission: yearOfAdmission },
        { year_of_passing_out: yearOfPassingOut },
      ],
    }).select("-password");
    res.status(200).json(batchmates);
  } catch (error) {
    res.status(400);
    throw new Error("Cannot find batchmates");
  }
});

module.exports = { getBatchmates, registerUser, loginUser, getme };
