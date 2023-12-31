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
        feedback: [{
            rating: {
                type: Number,
            },
            comment: {
                type: String,
            },
            userId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User', 
            }
        }],
    }, 
    { timestamps: true }
)

module.exports = mongoose.model("services", ServiceSchema)