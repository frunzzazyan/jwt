const express = require('express')
const mongoose = require("mongoose")
const app = express()
const port = 3000

const registerRouter = require("./routes/register.js")
const loginRouter = require("./routes/login.js")
const meRouter = require("./routes/meRouter.js")

const models = require("./models")

const RegisterServices = require("./services/RegisterServices.js")
const LoginServices = require('./services/LoginServices.js')
const MeServices = require('./services/MeServices.js')

mongoose.connect("mongodb://localhost:27017/person")
.then(()=>console.log("db ok"))
.catch((err)=>console.log(err))

app.use(express.json())

app.locals.models = {
    register : models.register
}

app.locals.services = {
    register : new RegisterServices(app.locals.models),
    login : new LoginServices(app.locals.models),
    authMe : new MeServices(app.locals.models)
}

app.use("/auth/register", registerRouter)
app.use("/auth/login", loginRouter)
app.use("/auth/me", meRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})