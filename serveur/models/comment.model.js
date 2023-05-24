module.exports = (sequelize, Sequelize) => {
    const Comment = sequelize.define("comment", {
        content: {
            type: Sequelize.STRING
          },
        author: {
            type: Sequelize.STRING
        }
    })
  
    return Comment
  }