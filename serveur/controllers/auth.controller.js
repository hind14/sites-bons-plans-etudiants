const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const db = require("../models");
const User = db.user;
const passwordValidator = require("../middleware/password-validator");

exports.signup = (req, res, next) => {
  if (!passwordValidator.validate(req.body.password)) {
    return res.status(401).json({ error: "Mot de passe invalide !" });
  }
  bcrypt
    .hash(req.body.password, 10)
    .then(hash => {
      User.create({
        name: req.body.name,
        lastname: req.body.lastname,
        username: req.body.username,
        age: req.body.age,
        email: req.body.email,
        password: hash,
      })
        .then(() => res.status(201).json({ message: "Utilisateur créé !" }))
        .catch(() =>
          res.status(400).json({ error: "Impossible de créer l'utilisateur" })
        );
    })
    .catch(() => {
      res.status(500).json({ error: "Un erreur est survenue lors de l'inscription" });
    });
};

exports.login = (req, res, next) => {

  User.findOne({ where: { email:  req.body.email } })
    .then(user => {
     
        bcrypt.compare(req.body.password, user.password)
        .then(valid => {
          if (!valid) {
        return res.status(401).json({ error: "Mot de passe incorrect !" });
      }

      res
        .status(200)
        .json({
            userId: user.id,
            role: user.role,
            token: jwt.sign(
              {
                userId: user.id,
                email: maskEmail(req.body.email),
                role: user.role,
              },
              process.env.jwtSecret,
              { expiresIn: "2h" }
            )
        })
      })
        .catch(() => {
          res.status(400).json({error: "Une erreur est survenue lors de la récupération du token"});
        });
    })
    .catch(() =>{
      res.status(500).json({ error: "Une erreur est survenue lors de la connexion" })
    });   
}

function maskEmail(email) {
  const mailParts = email.split("@");
  const partLeft = obfuscate(mailParts[0]);
  const partRight = obfuscate(mailParts[1]);
  return partLeft + "@" + partRight;
}

function obfuscate(strings) {
  let output = "";
  for (let i = 0; i < strings.length; i++) {
    if (i >= strings.length / 4) {
      output += "*";
    } else {
      output += strings[i];
    }
  }
  return output;
}
