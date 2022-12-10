
const express = require('express')
const router = express.Router()
const { GetData, PostData, UpdateData, DeleteData } = require("../controllers/Usercontrol")
//======================================================================get==>
router.get("/", GetData)

//========================================================================saved==>
router.post("/", PostData)
//========================================================================update==>
router.put("/:id", UpdateData)
//========================================================================Delete==>
router.delete("/:id", DeleteData)



module.exports = router