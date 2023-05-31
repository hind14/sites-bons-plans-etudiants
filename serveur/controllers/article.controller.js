const db = require("../models")
const Article = db.article
const Comment = db.comment
const User = db.user

exports.createArticle = async (req, res, next) => {
  const article = {
    title: req.body.title,
    content: req.body.content,
    category: req.body.category,
    userId: req.body.userId
  }

  // if (article.userId == null) {
  //   return res.status(400).json({ error: "Pas d'utilisateur..." })
  // } 
  if (article.title == null ||
      article.content == null ||
      article.category == null) {
    return res.status(400).json({ error: "Merci de remplir tous les champs." })
  }
  Article.create(article)
    .then(() => res.status(201).json({ message: 'article enregistré !' }))
    .catch(error => res.status(400).json({ error }))
}

exports.getAllArticles = async (req, res, next) => {

  Article.findAll()
    .then((article) => {
      res.status(200).json(article)
    })
    .catch((error) => {
      res.status(400).json({ error: "Problème d'affichage " })
    })
}

exports.getArticleById = async (req, res, ext) => {

  Article.findOne({
    where: { id: req.params.id },
    include: [
      {
        model: Comment,
        as: "comments"
      }]
  })
    .then((article) => {
      res.status(200).json(article)
    })
    .catch((error) => {
      res.status(404).json({ error: "Problème d'affichage " })
    })
}

exports.updateArticle = async (req, res, ext) => {
  const userId = req.params.userId
  const id = req.params.id

  if (req.body.title == null || req.body.content == null || req.body.category == null) {
    return res.status(400).json({ error: "Merci de remplir tous les champs." })
  }

  if (Article.userId === userId) {
    Article.update(
      {
        title: req.body.title,
        content: req.body.content,
        category: req.body.category
      },
      { where: { id: id } }
    )
      .then(() => {
        res.status(200).json({ message: 'article modifié !' })
      })
      .catch((error) => {
        res.status(404).json({ error: "Erreur lors de la modification." })
      })
  }
  else {
    console.log(error)
  }
}



exports.deleteArticle = async (req, res, next) => {

  const userId = req.params.userId
  const id = req.params.id

  if (Article.userId === userId) {
    Article.destroy({ where: { id: id } })
      .then((article) => {
        res.status(200).json(article)
      })
      .catch((error) => {
        res.status(404).json({ error: "Suppression impossible" })
      })
  }
  else {
    console.log(error)
  }
}