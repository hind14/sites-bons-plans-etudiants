const db = require("../models");
const Article = db.article
const Comment = db.comment
const User = db.user

exports.createArticle = async (req, res, next) => {
  const article = { title: req.body.title, description: req.body.description, category: req.body.category, date: req.body.date, userId: req.body.userId }

  if (req.body.title === "" || req.body.description === "") {
    return res.status(400).json({ error: "Merci de remplir tous les champs." });
  }

  Article.create(article)
    .then(() => res.status(201).json({ message: 'article enregistré !' }))
    .catch(error => res.status(400).json({ error }));
};

exports.getAllArticles = async (req, res, next) => {
  Article.findAll()
    .then((article) => {
      res.status(200).json(article);
    })
    .catch((error) => {
      res.status(400).json({ error: error });
    });
};

exports.getArticleById = async (req, res, ext) => {
  Article.findOne({
    where: { id: req.params.id },
    include: [
      {
        model: Comment,
        as: "comment"
      },
      {
        model: User,
        as: "user"
      }]
  })
    .then((article) => {
      res.status(200).json(article);
    })
    .catch((error) => {
      res.status(404).json({ error: error });
    });
}