module.exports = app => {
    const router = require("express").Router()
    const comment = require('../controllers/comment.controller.js')

    router.post('/:articleId', comment.createComment)
    router.get('/:articleId', comment.getAllComments)
    router.put('/:articleId/:id', comment.updateComment)
    router.delete('/:articleId/:id', comment.deleteComment)

    app.use('/articles', router)
}