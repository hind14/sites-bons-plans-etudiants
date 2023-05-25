module.exports = app => {
    const router = require("express").Router()
    const article = require('../controllers/article.controller.js')
    router.post('/', article.create)

    app.use('/articles', router)
}
