module.exports = app => {
    const router = require("express").Router()
    const comment = require('../controllers/comment.controller.js')

    router.post('/:articleId', comment.createComment)
    router.get('/:articleId', comment.getAllComments)
    router.put('/:articleId/comments/:id', comment.updateComment)
    router.delete('/:articleId/comments/:id', comment.deleteComment)

    app.use('/articles', router)
}