const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")

const UserModel = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    avatar : String
})

UserModel.pre("save", async function(){
    // hash password
    const hashPassword = await bcrypt.hash(this.password, 10)
    this.password = hashPassword
})

module.exports = mongoose.model("users", UserModel)