const mongoose = require('mongoose')

const alumniSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    personal_email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    name_of_institute: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: false
    },
    mobile_number: {
        type: Number,
        required: false
    },
    year_of_admission: {
        type: Number,
        required: true
    },
    year_of_passing_out: {
        type: Number,
        required: true
    },
    current_city: {
        type: String,
        required: true
    }
},
{
    timestamps: true
})

module.exports = mongoose.model('Alumni', alumniSchema)