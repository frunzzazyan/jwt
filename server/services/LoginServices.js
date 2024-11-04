const bcrypt = require("bcryptjs")
class LoginServices{
    constructor(models){
        this.models = models
    }
    async loginUser(body){
        // identification
        const user = await this.models.register.findOne({email : body.email})

        if(!user){
            return {"msg" : "invalid email"}
        }

        // authentication
        const validPassword = await bcrypt.compare(body.password, user.password)
        if(!validPassword){
            return {"msg" : "invalid password"}
        }
        
        return user
    }
}

module.exports = LoginServices