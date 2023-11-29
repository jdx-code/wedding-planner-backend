const mongoose = require('mongoose')

const ServiceSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        desc: {
            type: String,
            required: true
        },
    }, 
    { timestamps: true }
)

module.exports = mongoose.model("services", ServiceSchema)