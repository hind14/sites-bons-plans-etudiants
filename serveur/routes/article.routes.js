module.exports = app => {

    const router = require("express").Router()
    const article = require('../controllers/article.controller.js')
    const auth = require('../middleware/auth.js')
   
    router.post('/', auth.adminAuth, article.createArticle)
    router.get('/all', article.getAllArticles)
    router.get('/:id', article.getArticleById)
    router.put('/:id',  auth.adminAuth, article.updateArticle)
    router.delete('/:id', auth.adminAuth , article.deleteArticle)

    app.use('/articles', router)

}
