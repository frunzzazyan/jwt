const {registerValidate} = require("../validation/registerValidate.js")

class RegisterController{
    async createUser(req,res){
        try {
            // body validate
            const validateBody = await registerValidate.validateAsync(req.body)
           
            const user = await req.app.locals.services.register.createUser(validateBody)
            res.json(user)
        } catch (error) {
            res.json(error.message)
        }
    }
}

module.exports = RegisterController