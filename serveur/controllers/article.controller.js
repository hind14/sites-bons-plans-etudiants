const db = require("../models");
const Article = db.article;

exports.create = async (req, res, next) => {
  const article = { title: req.body.title, description: req.body.description, category: req.body.category, date: req.body.date, userId: req.body.userId }
 
  if (req.body.title === "" || req.body.description === "") {
    return res.status(400).json({ error: "Merci de remplir tous les champs." });
  }

  Article.create(article)
    .then(() => res.status(201).json({ message: 'Post enregistré !' }))
    .catch(error => res.status(400).json({ error }));
};

exports.getAll = async (req, res, next) => {
  Article.findAll({ include: User.name })
    .then((article) => {
      res.status(200).json(article);
    })
    .catch((error) => {
      res.status(400).json({ error: error });
    });
};