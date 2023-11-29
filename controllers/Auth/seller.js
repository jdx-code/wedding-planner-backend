const Seller = require('../../models/Seller')
const { userRegister, userLogin } = require('../../utils/Auth')

module.exports = {
    registerSeller : async(req, res) => {
        await userRegister(req.body, "seller", res)
    },
    loginSeller : async(req, res) => {
        await userLogin(req.body, "seller", res)
    },

    sellerAddServices : async(req, res) => {
        try {
            const newSeller = await Seller.create({
                services: req.body.serviceIds,
                user: req.body.userId,
            });

            console.log('New seller created with services.');
            res.status(200).json({ message: 'Seller and services added successfully', seller: newSeller });
        } catch (err) {
            console.error(err)
        }
    }
}

