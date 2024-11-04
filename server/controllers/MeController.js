class MeControllers{
    async authMe(req,res){
        try {
            const token = (req.headers.authorization || "").replace(/Bearer\s?/, "")
            const checkAuth = await req.app.locals.services.authMe.authMe(token) 
            res.send(checkAuth)
        } catch (error) {
            res.json({"msg" : "Blt"})
        }
    }
}

module.exports = MeControllers