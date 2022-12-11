const express = require("express")
const app = express();
const dotenv = require('dotenv')
dotenv.config();

const port = process.env.port || 4000

app.use(express.json())

app.use(express.urlencoded({ extended: false }))

app.use("/api/users", require('./Router/UserRouter'))

app.listen(port, () => console.log(`Server Is Running ${port}`))
