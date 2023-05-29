module.exports = app => {

    const router = require("express").Router()
    const user = require('../controllers/user.controller.js')
    const auth = require('../middleware/auth.js')

    router.post('/inscription', user.signup);
    router.post('/connexion', user.login);
    router.get('/profile/:id', auth, user.getUser);
    router.get('/all-users', auth, user.getListOfUsers);
    router.delete('/profile/:id', auth, user.deleteUser);

    app.use('/', router)

}