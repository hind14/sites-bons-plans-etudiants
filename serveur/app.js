const express = require('express')
const bodyParser = require("body-parser")
const cors = require("cors")
require('dotenv').config()
const db = require("./models")

const app = express()

var corsOptions = {
  origin: "http://localhost:8081"
}

app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS')
  next()
})

require("./routes/user.routes")(app)
require("./routes/article.routes")(app)
require("./routes/comment.routes")(app)

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})

app.get("/", (req, res) => {
  res.json({ message: "Welcome to my application." })
})

db.sequelize.sync({ force: false })
  .then(() => {
    console.log("Resync Db.")

  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message)
  })

