module.exports = app => {

    const router = require("express").Router()
    const comment = require('../controllers/comment.controller.js')
    const auth = require('../middleware/auth.js')

    // Public route
    router.get('/:articleId/com', comment.getAllComments)

    //User routes
    router.post('/:articleId/com', auth.userAuth, comment.createComment)
    router.put('/:articleId/com/:id', auth.userAuth, comment.updateComment)
    router.delete('/:articleId/com/:id', auth.userAuth, comment.deleteComment)

    //Admin route
    router.delete('/:articleId/com/:id/admin', auth.adminAuth, comment.deleteComment)

    app.use('/articles', router)

}