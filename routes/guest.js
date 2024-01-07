const router = require("express").Router()
const guestController = require('../controllers/guest')

// Other routes
router.get('/services', guestController.getServices)
router.get('/sellers-by-category/:categoryId', guestController.getSellersByCategoryId)

router.get('/seller-details/:sellerId', guestController.getSellerDetailsBySellerId)

module.exports = router