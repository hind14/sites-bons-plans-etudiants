const db = require("../models")
const Article = db.article
const Comment = db.comment
const User = db.user

exports.createArticle = async (req, res, next) => {
  const article = {
    title: req.body.title,
    content: req.body.content,
    category: req.body.category
  }

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
  const id = req.params.id

  if (req.body.title == null || req.body.content == null || req.body.category == null) {
    return res.status(400).json({ error: "Merci de remplir tous les champs." })
  }

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



exports.deleteArticle = async (req, res, next) => {

  const id = req.params.id

  Article.destroy({ where: { id: id } })
    .then((article) => {
      res.status(200).json(article)
    })
    .catch((error) => {
      res.status(404).json({ error: "Suppression impossible" })
    })
}