const { userRegister, userLogin } = require('../../utils/Auth')

module.exports = {
    registerSeller : async(req, res) => {
        await userRegister(req.body, "seller", res)
    },
    loginSeller : async(req, res) => {
        await userLogin(req.body, "seller", res)
    }
}