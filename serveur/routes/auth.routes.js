module.exports = app => {
    const router = require("express").Router()
    const authentication = require("../controllers/auth.controller.js")

    // Signup and Login
    router.post('/signup', authentication.signup)
    router.post('/login', authentication.login)

    app.use('/auth', router)
}