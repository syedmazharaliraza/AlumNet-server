const mongoose = require("mongoose");
const experienceSchema = require("../schemas/experienceSchema.js");
const skillSchema = require("../schemas/skillSchema.js");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    name_of_institute: String,
    course: String,
    branch: String,
    gender: String,
    mobile_number: String,
    year_of_admission: Number,
    year_of_passing_out: Number,
    current_city: String,
    years_of_experience: Number,
    working_experience: [experienceSchema],
    skills: [skillSchema],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
