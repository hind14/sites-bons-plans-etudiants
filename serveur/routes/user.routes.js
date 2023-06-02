module.exports = app => {

    const router = require("express").Router()
    const user = require('../controllers/user.controller.js')
    const auth = require('../middleware/auth.js')

    router.post('/auth/inscription', user.signup)
    router.post('/auth/connexion', user.login)
    
    router.get('/users', auth.adminAuth, user.getListOfUsers)

    router.get('/profiles/:id', auth.userAuth, user.getUser)
    router.delete('/profiles/:id', auth.userAuth,  user.deleteUser)

    app.use('/', router)
}