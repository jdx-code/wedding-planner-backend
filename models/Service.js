const mongoose = require('mongoose')

const ServiceSchema = new mongoose.Schema(
    {
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Category', // Reference to the Category model
        },        
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User', // Reference to the User model
        },
        name: {
            type: String,
            required: true
        },
        about: {
            type: String,            
        },
        pricePerHour: {
            type: Number,
            required: true
        },
        location: {
            type: String,
            required: true
        },
        contact: {
            type: Number,
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
        photos: {
            type: Array,            
        },  
        cloudinary_ids: {
            type: Array,
        }        
    }, 
    { timestamps: true }
)

module.exports = mongoose.model("services", ServiceSchema)