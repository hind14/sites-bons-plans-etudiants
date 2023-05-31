module.exports = (sequelize, DataTypes) => {

  const Comment = sequelize.define("comments", {
    commentContent: {
      type: DataTypes.STRING,
      required: true,
      validate: {
        notEmpty: true,
      }
    },
  })

  return Comment

}