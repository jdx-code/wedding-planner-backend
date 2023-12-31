const router = require("express").Router()
const guestController = require('../controllers/guest')

// Other routes
router.get('/products-and-services', guestController.getProductsAndServices)
router.get('/product-and-service/:id', guestController.getProductAndServiceById)

module.exports = router