const mongoose = require('mongoose')

const SellerSchema = new mongoose.Schema(
    {
        services: [
            {
              type: mongoose.Schema.Types.ObjectId,
              ref: 'Service', // Reference to the Service model
            },
        ],
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User', // Reference to the User model
        },
          
        // Other fields specific to sellers
    }, 
    { timestamps: true }
)

module.exports = mongoose.model("sellers", SellerSchema)