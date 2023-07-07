const db = require("../models")
const Article = db.article
const Comment = db.comment
const fs = require('fs')

exports.createArticle = async (req, res, next) => {
  const article =  JSON.parse(req.body.article)

  article.image =  `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
 
  if (article.title == null || article.content == null || article.category == null) {
    return res.status(400).json({ error: "Merci de remplir tous les champs." })
  }

  Article.create(article)
    .then(() => res.status(201).json(article))
    .catch(error => res.status(400).json({ error }))
}

exports.getAllArticles = async (req, res, next) => {

  Article.findAll()
    .then((article) => {
      res.status(200).json(article)
    })
    .catch(() => {
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
    .catch(() => {
      res.status(404).json({ error: "Problème d'affichage " })
    })
}

exports.updateArticle = async (req, res, ext) => {
  const id = req.params.id
  const article =  JSON.parse(req.body.article)

  Article.update(
   article,
    { where: { id: id } }
  )
    .then(() => {
      res.status(200).json(article)
    })
    .catch(() => {
      res.status(404).json({ error: "Erreur lors de la modification." })
    })
}



exports.deleteArticle = async (req, res, next) => {
  const id = req.params.id

  Article.findOne({ where: { id: id } })
    .then(article => {

      const filename = article.image.split('/images/')[1]
      fs.unlink(`./images/${filename}`, () => {

        Article.destroy({ where: { id: id } })
          .then(() => {
            res.status(200).json({ message: 'Objet supprimé !' })
          })
          .catch(() => {
            res.status(404).json({ error: "Suppression impossible" })
          })

      })

    })
   .catch((error) => res.status(500).json({ error }))

}