const express = require("express")
const path = require("path")
const initConnection = require("./DB/connection")
const { userRoutes, adminRoutes, categRoutes } = require("./routes")
const app = express()
require("dotenv").config()

const port = process.env.PORT

app.use("/uploads", express.static(path.join(__dirname, "uploads")))
// console.log(__dirname);

initConnection()
app.use(express.json())
app.use(userRoutes, adminRoutes, categRoutes)



app.listen(port, () => console.log(`Server Running on port ${port}`))