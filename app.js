const express = require("express")
const app = express();
const dotenv = require('dotenv')
dotenv.config();
const port = process.env.Port || 9999




















app.listen(port, () => console.log('Server Is Running On ${Port}'));