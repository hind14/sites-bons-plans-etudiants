module.exports = app => {
    const router = require("express").Router()
    const article = require('../controllers/article.controller.js')

    router.post('/', article.createArticle)
    router.get('/all', article.getAllArticles)
    router.get('/:id', article.getArticleById)
    router.put('/:id', article.updateArticle)
    router.delete('/:id', article.deleteArticle)

    app.use('/articles', router)
}
