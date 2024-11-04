const joi = require("joi")

const registerValidate = joi.object({
    name : joi.string().min(2).required(),
    email : joi.string().email().required(),
    password : joi.string().required(),
    avatar : joi.string()
})

module.exports = {registerValidate}