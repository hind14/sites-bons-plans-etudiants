const dbConfig = require("../config/db.config.js")
const Sequelize = require("sequelize")

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.article = require("./article.model.js")(sequelize, Sequelize)
db.comment = require("./comment.model.js")(sequelize, Sequelize)
db.user = require("./user.model.js")(sequelize, Sequelize)

db.article.belongsTo(db.user, {
  foreignKey: "userId",
  onDelete: 'CASCADE',
  as: "user",
});

//Un commentaire appartient à un utilisateur, relié par l'id de l'utilisateur
db.comment.belongsTo(db.user, {
  foreignKey: "userId",
  onDelete: 'CASCADE',
  as: "user"
});

db.comment.belongsTo(db.article, {
  foreignKey: "articleId",
  onDelete: 'CASCADE',
  as: "article"
});

//Un utilisateur peut avoir plusieurs articles
db.user.hasMany(db.article, { as: "article"});
db.user.hasMany(db.comment, {as : "comment"})
db.article.hasMany(db.comment, {as : "comment"})

db.sequelize.sync({ force: true })

module.exports = db