module.exports = {

  HOST: "localhost",
  USER: "root",
  PASSWORD: "root",
  DB: "students_tips",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }

}
