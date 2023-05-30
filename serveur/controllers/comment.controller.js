const db = require("../models")
const Comment = db.comment
const Article = db.article
const User = db.user

exports.createComment = async (req, res, next) => {
  const comment = {
    content: req.body.content,
    userId: req.body.userId,
    articleId: req.body.articleId
  }

  Comment.create(comment)
    .then(() => res.status(201).json({ message: 'commentaire enregistré !' }))
    .catch(error => res.status(400).json({ error: "pb lors de l'enregistrement" }))
}

exports.getAllComments = async (req, res, next) => {
  Comment.findAll({
    where: { articleId: req.params.id },
    include: [{
      model: Article,
      as: "articles"
    },
    {
      model: User,
      as: "users"
    }
    ]
  })
    .then((comment) => {
      res.status(200).json(comment);
    })
    .catch((error) => {
      res.status(400).json({ error: error })
    })
}

exports.updateComment = async (req, res, ext) => {

  const content = req.body.content
  const userId = req.params.userId
  const id = req.params.id

  if (content === "") {
    return res.status(400).json({ error: "Commentaire vide !." })
  }

  if (Comment.userId === userId) {
    Comment.update(
      {
        content: content,
      },
      {
        where: {
          id: id,
          articleId: req.params.articleId
        }
      })
      .then(() => {
        res.status(200).json({ message: 'Commentaire modifié !' })
      })
      .catch((error) => {
        res.status(404).json({ error: "Erreur lors de la modification du com." })
      })
  }
  else {
    console.log(error)
  }
}

exports.deleteComment = async (req, res, next) => {
  const userId = req.params.userId;
  if (Comment.userId === userId || User.isAdmin == true) {
    Comment.findOne({
      where: {
        articleId: req.params.articleId,
        id: req.params.id,
      },
    })
      .then((comment) => {
        if (!comment) {
          res.status(400).json({ error: "Vous n'avez pas l'autorisation" });
        }
        comment.destroy()
          .then(() => res.status(200).json({ message: 'Commentaire supprimé !' }))
          .catch(error => res.status(400).json({ error }))
      })
      .catch((error) => {
        res.status(404).json({ error: error });
      })
  }
}