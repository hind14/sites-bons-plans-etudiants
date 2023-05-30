module.exports = (sequelize, DataTypes) => {

  const Article = sequelize.define("articles", {
    title: {
      type: DataTypes.STRING
    },
    content: {
      type: DataTypes.TEXT
    },
    category: {
      type: DataTypes.STRING
    }
  })

  return Article

}