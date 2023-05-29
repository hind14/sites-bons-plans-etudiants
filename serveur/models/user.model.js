module.exports = (sequelize, Sequelize) => {

  const User = sequelize.define("users", {
    name: {
      type: Sequelize.STRING,
      required: true,
      validate: {
        notEmpty: true
      }
    },
    lastname: {
      type: Sequelize.STRING,
      required: true,
      validate: {
        notEmpty: true
      }
    },
    username: {
      type: Sequelize.STRING,
      required: true,
      unique: true,
      validate: {
        notEmpty: true
      }
    },
    age: {
      type: Sequelize.STRING,
      required: true,
      validate: {
        notEmpty: true,
        isInt: true,
        max: 100,
        min: 15
      }
    },
    email: {
      type: Sequelize.STRING,
      unique: true,
      required: true,
      validate: {
        notEmpty: true
      }
    },
    password: {
      type: Sequelize.STRING,
      required: true,
      validate: {
        notEmpty: true
      }
    },
    isAdmin: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    }
  })

  return User

}