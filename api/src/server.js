const express = require('express')

const migrationsRun = require('./database/sqlite/migrations')
const routes = require('./routes')
const cors = require("cors")

migrationsRun()

const app = express()

app.use(cors())
app.use(express.json())

app.use(routes)


const PORT = 3333
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`))
