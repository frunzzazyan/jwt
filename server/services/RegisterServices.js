const jwt = require("jsonwebtoken")
require("dotenv").config()
class RegisterServices{
    constructor(models){
        this.models = models
    }
    async createUser(body){
        // check body
        const doc = await this.models.register(body)
        // user save
        const user = await doc.save()

        const token = jwt.sign({_id : user._id}, {expiresIn : "1d"})
        const {password, __v ,...userData} = user._doc
        return {...userData,token}
    }
}

module.exports = RegisterServices