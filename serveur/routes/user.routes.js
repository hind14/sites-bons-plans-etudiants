module.exports = app => {

    const router = require("express").Router()
    const user = require('../controllers/user.controller.js')
    const auth = require('../middleware/auth.js')

    router.post('/auth/inscription', user.signup)
    router.post('/auth/connexion', user.login)
    router.get('/profile/:id', auth,  user.getUser)
    router.get('/all-users', user.getListOfUsers)
    router.delete('/profile/:id',  user.deleteUser)

    app.use('/', router)
}