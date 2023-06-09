module.exports = (sequelize, DataTypes) => {

  const User = sequelize.define("users", {
    name: {
      type: DataTypes.STRING,
      required: true,
      validate: {
        notEmpty: true
      }
    },
    lastname: {
      type: DataTypes.STRING,
      required: true,
      validate: {
        notEmpty: true
      }
    },
    username: {
      type: DataTypes.STRING,
      required: true,
      unique: true,
      validate: {
        notEmpty: true
      }
    },
    age: {
      type: DataTypes.INTEGER,
      required: true,
      validate: {
        notEmpty: true,
        max: 100,
        min: 15
      }
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      required: true,
      validate: {
        notEmpty: true
      }
    },
    password: {
      type: DataTypes.STRING,
      required: true,
      validate: {
        notEmpty: true
      }
    },
    role: {
      type: DataTypes.STRING,
      required: true,
      defaultValue: "user"
    }
  })

  return User

}