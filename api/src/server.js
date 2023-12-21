const express = require('express')

const migrationsRun = require('./database/sqlite/migrations')
const routes = require('./routes')
const cors = require("cors")


const { UPLOADS_FOLDER } = require('./configs/upload'); 

migrationsRun()

const app = express()

app.use(cors())
app.use(express.json())


app.use('/files', express.static(UPLOADS_FOLDER)); 

app.use(routes)


const PORT = 3333
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`))
