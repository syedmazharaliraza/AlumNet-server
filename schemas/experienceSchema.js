const mongoose = require("mongoose");

module.exports = mongoose.Schema(
  {
    company_name: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    years_in_company: {
      type: String,
    },
    role_description: String,
  },
  {
    timestamps: true,
  }
);
