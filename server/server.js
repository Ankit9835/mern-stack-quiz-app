const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
require('dotenv').config()
const dbConfig = require("./config/dbConfig");

const port = process.env.port || 5000

app.use(express.json())

const userRoutes = require('./routes/userRoutes')
const examRoutes = require('./routes/examRoutes')
app.use('/api/user', userRoutes)
app.use('/api/exams', examRoutes)


app.listen(port, () => console.log(`server listening to ${port}`))