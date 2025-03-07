const express = require('express');
const aiRoutes = require('./routes/ai.routes')
const cors = require('cors')

const app = express()

app.use(cors())

app.use(express.json())

app.post("/get-review", aiController.getReview)

app.use('/ai', aiRoutes)

module.exports = app
