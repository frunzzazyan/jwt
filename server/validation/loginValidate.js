const joi = require("joi")

const loginValidate = joi.object({
    email : joi.string().email().required(),
    password : joi.string().required()
})

module.exports = {loginValidate}