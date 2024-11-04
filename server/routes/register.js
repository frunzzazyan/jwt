const express = require("express")
const router = express.Router()

const RegisterController = require("../controllers/RegisterController.js")
const controllers = new RegisterController()

router.post("/", controllers.createUser)

module.exports = router
