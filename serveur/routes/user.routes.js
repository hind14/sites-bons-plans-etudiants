module.exports = (app) => {
  const router = require("express").Router();
  const user = require("../controllers/user.controller.js");
  const auth = require("../middleware/auth.js");

    //Admin route
    router.get('/', auth.adminAuth, user.getListOfUsers)
   
   
    router.delete('/:id', auth.ownerOrAdmin, user.deleteUser)

    //User route
    router.get('/:id', auth.userAuth, user.getUser)


    app.use('/users', router)
}