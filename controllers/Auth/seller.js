const Seller = require('../../models/Seller')
const { userRegister, userLogin } = require('../../utils/Auth')
const cloudinary = require('../../middleware/media_upload/cloudinary')

module.exports = {
    registerSeller : async(req, res) => {
        await userRegister(req.body, "seller", res)
    },
    loginSeller : async(req, res) => {
        await userLogin(req.body, "seller", res)
    },

    sellerNewService : async(req, res) => {
        try {

            // Upload the files to Cloudinary
            const uploadPromises = req.files.map((file) => {
                return cloudinary.uploader.upload(file.path, {
                    folder: 'wedding-planner'
                })
            })

            // Wait for all files to be uploaded to cloudinary
            const results = await Promise.all(uploadPromises)
            const imageUrls = results.map((result) => result.secure_url)
            const cloudinary_ids = results.map((result) => result.public_id)

            const newSeller = await Seller.create({
                service: req.body.serviceId,
                user: req.body.userId,
                name: req.body.name,
                about: req.body.about,
                pricePerHour: req.body.pricePerHour,
                location: req.body.location,
                contact: req.body.contact,
                rating: req.body.rating,
                comments: req.body.comments,
                photos: imageUrls,
                cloudinary_ids: cloudinary_ids,
            });

            console.log('New seller created with services.');
            res.status(200).json({ message: 'Seller and services added successfully', seller: newSeller });
        } catch (err) {
            console.error(err)
        }
    }
}

