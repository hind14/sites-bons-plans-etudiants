module.exports = app => {

    const router = require("express").Router()
    const comment = require('../controllers/comment.controller.js')
    const auth = require('../middleware/auth.js')

    router.post('/:articleId', auth, comment.createComment)
    router.get('/:articleId', comment.getAllComments)
    router.put('/:articleId/:id', auth,  comment.updateComment)
    router.delete('/:articleId/:id', auth,  comment.deleteComment)

    app.use('/articles', router)
    
}