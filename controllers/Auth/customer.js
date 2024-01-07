const Service = require('../../models/Service')
const { userRegister, userLogin } = require('../../utils/Auth')

module.exports = {
    registerCustomer : async(req, res) => {
        await userRegister(req.body, "customer", res)
    },
    loginCustomer : async(req, res) => {
        await userLogin(req.body, "customer", res)
    },
    addFeedback : async(req, res) => {  
        try{
            const feedback = {
                rating : req.body.rating,
                comment : req.body.comment,
                userId : req.body.userId
            }
            
            const service = await Service.findById(req.params.serviceId)

            if (!service) {
                return res.status(404).json({ error: 'service not found' });
            }

            service.feedback = [...service.feedback, feedback];           
            
            await service.save();
            
            res.status(200).json({ message: 'Feedback added. service updated.' });

        } catch (err)     {
            console.error(err)
        }
    }
}