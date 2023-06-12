module.exports = app => {

    const router = require("express").Router()
    const user = require('../controllers/user.controller.js')
    const auth = require('../middleware/auth.js')

    // Signup and Login
    router.post('/auth/signup', user.signup)
    router.post('/auth/login', user.login)

    //Admin route
    router.get('/users', auth.adminAuth, user.getListOfUsers)
    router.delete('/users/:id', auth.adminAuth, user.deleteUser)

    //User route
    router.get('/users/:id', auth.userAuth, user.getUser)
    router.delete('/users/:id', auth.userAuth, user.deleteUser)

    app.use('/', router)
}