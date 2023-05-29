module.exports = (sequelize, Sequelize) => {

  const Article = sequelize.define("articles", {
    title: {
      type: Sequelize.STRING
    },
    content: {
      type: Sequelize.TEXT
    },
    category: {
      type: Sequelize.STRING
    }
  })

  return Article

}