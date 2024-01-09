const Service = require('../models/Service')

module.exports = {
    
    getServices : async(req, res) => {
        try{            
            const results = await Service.find()
            res.status(200).json({ message: 'Fetching products and services..', results });
        } catch (err) {
            console.error(err)
        }
    },    

    getSellersByCategoryId : async(req, res) => {
        try{            
            console.log(req.params.categoryId)
            const results = await Service.find({ category : req.params.categoryId })
            res.status(200).json({ message: 'Fetching products and services by Seller..', results });
        } catch (err) {
            console.error(err)
        }
    },

    getServiceDetailsByServiceId : async(req, res) => {
        try{            
            const results = await Service.findById(req.params.serviceId)
            res.status(200).json({ message: 'Fetching products and services..', results });
        } catch (err) {
            console.error(err)
        }
    }, 
}