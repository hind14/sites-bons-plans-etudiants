module.exports = app => {

    const router = require("express").Router()
    const article = require('../controllers/article.controller.js')
    const auth = require('../middleware/auth.js')
    const multer = require('../middleware/multer.js')

    // Public routes
    router.get('/all', article.getAllArticles)
    router.get('/:id', article.getArticleById)

    // Admin routes
    router.post('/', auth.adminAuth, multer, article.createArticle)
    router.put('/:id', auth.adminAuth, multer, article.updateArticle)
    router.delete('/:id', auth.adminAuth, multer, article.deleteArticle)

    app.use('/articles', router)

}
