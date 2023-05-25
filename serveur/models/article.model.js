module.exports = (sequelize, Sequelize) => {
    const Article = sequelize.define("articles", {
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      category: {
        type: Sequelize.STRING
      }
    })
    return Article
  }