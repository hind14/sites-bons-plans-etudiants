module.exports = (sequelize, Sequelize) => {

  const Comment = sequelize.define("comment", {
    content: {
      type: Sequelize.STRING,
      required: true,
      validate: {
        notEmpty: true,
      }
    },
  })

  return Comment

}