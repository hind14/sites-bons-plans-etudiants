module.exports = (app) => {
  const router = require("express").Router();
  const user = require("../controllers/user.controller.js");
  const auth = require("../middleware/auth.js");

    //Admin route
    router.get('/admin', auth.adminAuth, user.getListOfUsers)
    router.delete('/admin/:id', auth.adminAuth, user.deleteUser)

    //User route
    router.get('/:id', auth.userAuth, user.getUser)
    router.delete('/:id', auth.userAuth, user.deleteUser)

    app.use('/users', router)
}