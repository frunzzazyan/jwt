const express = require("express")
const router = express.Router()

const LoginController = require("../controllers/LoginControllers.js")
const controllers = new LoginController()

router.post("/", controllers.loginUser)

module.exports = router
