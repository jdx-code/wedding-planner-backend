const Service = require('../../models/Service')
const { userRegister, userLogin } = require('../../utils/Auth')

module.exports = {
    registerAdmin : async(req, res) => {
        await userRegister(req.body, "admin", res)
    },
    loginAdmin : async(req, res) => {        
        await userLogin(req.body, "admin", res)
    },    

    adminAddService : async(req, res) => {
        try{
            await Service.create({
                name: req.body.name,
                desc: req.body.desc
            })
            console.log('New service added in the services list..')
        } catch (err){
            console.error(err)            
        }
    }
}