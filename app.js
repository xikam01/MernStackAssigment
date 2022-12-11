const express = require('express')
const dotenv = require('dotenv')
dotenv.config();
const port = process.env.port || 5000

const app = express()





app.use('/api/assi', require('./Routes/UseRouter'))





app.listen(port, () => console.log(`Server is Running on ${port}`))