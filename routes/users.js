const router = require("express").Router()
const { userRegister, userLogin, userAuth, checkRole, serializeUser } = require('../utils/Auth')
const adminController = require('../controllers/Auth/admin')
const customerController = require('../controllers/Auth/customer')
const sellerController = require('../controllers/Auth/seller')
const upload = require('../middleware/media_upload/multer')

// Admin registration route
router.post('/register-admin', adminController.registerAdmin)

// Customer registration route
router.post('/register-customer', customerController.registerCustomer)

// Seller registration route
router.post('/register-seller', sellerController.registerSeller)


// Admin login route
router.post('/login-admin', adminController.loginAdmin)

// Customer login route
router.post('/login-customer', customerController.loginCustomer)

// Seller login route
router.post('/login-seller', sellerController.loginSeller)

// Profile route
router.get('/profile', userAuth, async(req, res) => {
    return res.json(serializeUser(req.user))
})

// Admin PROTECTED route
router.get('/admin-protected', userAuth, checkRole(['admin']), (req, res) => {
    return res.status(200).send({
        success: true,
        user: req.user
    })
})

router.post('/admin-protected/admin-add-category', userAuth, checkRole(['admin']), adminController.adminAddCategory)

// Customer PROTECTED route
router.get('/customer-protected', userAuth, checkRole(['customer']), (req, res) => {
    return res.status(200).send({
        success: true,
        user: req.user
    })
})

router.put('/customer-protected/addFeedback/:serviceId', userAuth, checkRole(['customer']), customerController.addFeedback)

// Seller PROTECTED route
router.get('/seller-protected', userAuth, checkRole(['seller']), (req, res) => {
    return res.status(200).send({
        success: true,
        user: req.user
    })
})

router.post('/seller-protected/seller-new-service', userAuth, checkRole(['seller']), upload.array("files", 5), sellerController.sellerNewService)

// Seller and Customer PROTECTED route
router.get('/seller-customer-protected', userAuth, checkRole(['seller', 'customer']), async(req, res) => {
    return res.json("Hello Seller | Customer")
})

module.exports = router

