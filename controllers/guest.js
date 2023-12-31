const Service = require('../models/Service')

module.exports = {
    getProductsAndServices : async(req, res) => {
        try{            
            const results = await Service.find()
            res.status(200).json({ message: 'Fetching products and services..', results });
        } catch (err) {
            console.error(err)
        }
    },    
    getProductAndServiceById : async(req, res) => {
        try{            
            const results = await Service.findById(req.params.id)
            res.status(200).json({ message: 'Fetching products and services..', results });
        } catch (err) {
            console.error(err)
        }
    }, 
}