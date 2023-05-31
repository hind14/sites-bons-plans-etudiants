module.exports = (sequelize, DataTypes) => {

  const Article = sequelize.define("articles", {
    title: {
      type: DataTypes.STRING,
      required: true,
      validate: {
        notEmpty: true,
      }
    },
    content: {
      type: DataTypes.TEXT,
      required: true,
      validate: {
        notEmpty: true,
      }
    },
    category: {
      type: DataTypes.STRING
    }
  })

  return Article

}