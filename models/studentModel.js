const mongoose = require('mongoose')

const studentSchema = mongoose.Schema({
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
    student_id: {
        type: String,
        required: true
    },
    year_of_admission: {
        type: Number,
        required: true
    },
    mobile_number: {
        type: Number,
        required: false
    },
    gender: {
        type: String,
        required: false
    }
})

module.exports = mongoose.model('Student',studentSchema)