const mongoose = require('mongoose')

const experienceSchema = mongoose.Schema({
    company_name: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    years_in_company: {
        type: String
    },
    role_description: String
},
{
    timestamps: true
}
)

module.exports = mongoose.model('Experiences', experienceSchema)