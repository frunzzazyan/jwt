const jwt = require("jsonwebtoken")

class MeServices{
    constructor(models){
        this.models = models
    }
    async authMe(token){
        if(token){
           const decoded = jwt.verify(token, "123") 
           const user = await this.models.register.findById(decoded._id) 
           return {_id : user._id, name : user.name, email : user.email}
        }else{
            return {"msg" : "invalid token"}
        }
    }
}

module.exports = MeServices