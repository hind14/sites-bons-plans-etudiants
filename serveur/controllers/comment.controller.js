const db = require("../models")
const Comment = db.comment

exports.createComment = async (req, res, next) => {

  const comment = {
    commentContent: req.body.commentContent,
    userId: req.body.userId,
    articleId: req.params.articleId
  }

  if (comment.commentContent == "") {
    return res.status(400).json({ error: "Impossible d'enregistrer le comentaire" })
  }
  Comment.create(comment)
    .then(() => res.status(201).json(comment))
    .catch(() => res.status(400).json({ error: "Problème lors de l'enregistrement" }))
}

exports.getAllComments = async (req, res, next) => {
  Comment.findAll({where:{ articleId : req.params.articleId}})
    .then((comment) => {
      res.status(200).json(comment);
    })
    .catch((error) => {
      res.status(400).json({ error: error })
    })
}

exports.updateComment = async (req, res, ext) => {

  const comment = {
    commentContent: req.body.commentContent,
    userId: req.body.userId,
    articleId: req.params.articleId,
    id :req.params.id 
  }

  if (comment.commentContent === "") {
    return res.status(400).json({ error: "Commentaire vide !." })
  }

  if (comment.userId === req.body.userId) {
    Comment.update(comment, { where: { id: comment.id, articleId: comment.articleId, } })
      .then(() => {
        res.status(200).json(comment)
      })
      .catch(() => {
        res.status(404).json({ error: "Erreur lors de la modification du com." })
      })
  }
};

exports.deleteComment = async (req, res, next) => {
    Comment.findOne({
      where: {
        articleId: req.params.articleId,
        id: req.params.id,
      },
    })
      .then((comment) => {
        if (!comment) {
          res.status(404).json({ error: "Ce commentaire n'existe pas" });
        }
        comment.destroy()
          .then(() => res.status(200).json({ message: 'Commentaire supprimé !' }))
          .catch(error => res.status(400).json({ error }))
      })
      .catch((error) => {
        res.status(404).json({ error: error });
      })
}