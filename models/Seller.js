const mongoose = require('mongoose')

const SellerSchema = new mongoose.Schema(
    {
        service: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Service', // Reference to the Service model
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
        rating: {
            type: Number,            
        },
        comments: {
            type: String,            
        },
        photos: {
            type: Array,            
        },  
        cloudinary_ids: {
            type: Array,
        }        
    }, 
    { timestamps: true }
)

module.exports = mongoose.model("sellers", SellerSchema)