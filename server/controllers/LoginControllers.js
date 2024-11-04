const {loginValidate} = require("../validation/loginValidate.js")

class LoginController{
    async loginUser(req,res){
        try {
            const validateLogin = await loginValidate.validateAsync(req.body)
            const user = await req.app.locals.services.login.loginUser(validateLogin)
            res.json(user)
        } catch (error) {
            res.json(error.message)
        }
    }
}

module.exports = LoginController