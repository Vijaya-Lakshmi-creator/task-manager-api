const express = require("express")
const connectDB = require("./config/db")
const taskRoutes = require("./routes/taskRoutes")
require("dotenv").config();

const app = express()

app.use(express.json())

connectDB()

app.use("/api", taskRoutes)

app.listen(5000, () => {
  console.log("Server running on port 5000")
})