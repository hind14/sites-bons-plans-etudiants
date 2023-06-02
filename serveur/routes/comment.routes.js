module.exports = app => {

    const router = require("express").Router()
    const comment = require('../controllers/comment.controller.js')
    const auth = require('../middleware/auth.js')

    router.post('/:articleId/com', auth.userAuth, comment.createComment)
    router.get('/:articleId/com', comment.getAllComments)
    router.put('/:articleId/com/:id', auth.userAuth, comment.updateComment)
    router.delete('/:articleId/com/:id', auth.userAuth, auth.adminAuth, comment.deleteComment)

    app.use('/articles', router)

}