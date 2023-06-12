const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const db = require('../models')
const User = db.user
const passwordValidator = require('../middleware/password-validator')

exports.signup = (req, res, next) => {
  if (!passwordValidator.validate(req.body.password)) {
    return res.status(401).json({ error: 'Mot de passe invalide !' })
  }
  bcrypt.hash(req.body.password, 10)
    .then(hash => {
      User.create({
        name: req.body.name,
        lastname: req.body.lastname,
        username: req.body.username,
        age: req.body.age,
        email: req.body.email,
        password: hash
      })
        .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
        .catch(error => res.status(400).json({ error }))
    })
    .catch(error => {
      return res.status(500).json({ error })
    })

}

exports.login = (req, res, next) => {

  User.findOne({
    where: { email: req.body.email }
  })
    .then(user => {
      if (!user) {
        return res.status(401).json({ error: 'Email incorrect !' })
      }
      bcrypt.compare(req.body.password, user.password)
        .then(valid => {
          if (!valid) {
            return res.status(401).json({ error: 'Mot de passe incorrect !' })
          }
          res.status(200).json({
            userId: user.id,
            role: user.role,
            token: jwt.sign(
              {
                userId: user.id,
                email: maskEmail(req.body.email),
                role: user.role
              },
              process.env.jwtsecret,
              { expiresIn: '2h' }
            ),
          })
        })
        .catch(error => {
          return res.status(502).json({ error })
        }
        )
    })
    .catch(error => res.status(501).json({ error }))
}

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

}

function maskEmail(email) {

  const mailParts = email.split('@')
  const partLeft = obfuscate(mailParts[0])
  const partRight = obfuscate(mailParts[1])
  return partLeft + '@' + partRight

}

function obfuscate(strings) {

  let output = ''
  for (let i = 0; i < strings.length; i++) {
    if (i >= strings.length / 4) {
      output += '*'
    } else {
      output += strings[i]
    }
  }
  return output

}