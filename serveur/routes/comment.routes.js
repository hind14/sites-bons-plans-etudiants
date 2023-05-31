module.exports = app => {

    const router = require("express").Router()
    const comment = require('../controllers/comment.controller.js')
    const auth = require('../middleware/auth.js')

    router.post('/:articleId/com', comment.createComment)
    router.get('/:articleId/com', comment.getAllComments)
    router.put('/:articleId//com/:id', comment.updateComment)
    router.delete('/:articleId/com/:id', comment.deleteComment)

    app.use('/articles', router)

}