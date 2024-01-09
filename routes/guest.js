const router = require("express").Router()
const guestController = require('../controllers/guest')

// Other routes
router.get('/services', guestController.getServices)

router.get('/sellers-by-category/:categoryId', guestController.getSellersByCategoryId)

router.get('/service-details/:serviceId', guestController.getServiceDetailsByServiceId)

module.exports = router