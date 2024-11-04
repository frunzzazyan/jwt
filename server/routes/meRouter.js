const express = require("express")
const router = express.Router()

const MeControllers = require("../controllers/MeController.js")
const controllers = new MeControllers()

router.get("/", controllers.authMe)

module.exports = router