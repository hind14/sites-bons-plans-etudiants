const db = require("../models");
const User = db.user;

exports.getUser = (req, res, next) => {
  const id = req.params.id
  User.findOne({
    where: { id: id }
  })
    .then(user => {
      res.status(200).json({ user })
    })
    .catch(() => res.status(404).json({ error: 'Utilisateur non trouvé' }))

}

exports.getListOfUsers = (req, res, next) => {
  User.findAll()
    .then(user => {
      res.status(200).json(user)
    })
    .catch(() => res.status(403).json({ error: 'Erreur lors de la récupération des utilisateurs' }))

}

exports.deleteUser = (req, res, next) => {

  const id = req.params.id
  User.findOne({
    attributes: ['id'],
    where: { id: id }
  })
    .then(() => {
      User.destroy({ where: { id: id } })
      res.status(200).json({ message: 'Votre compte a été supprimé' })
    })
    .catch(error => res.status(500).json({ error: "une erreur s'est produite, le compte n'est pas supprimé" }))

};