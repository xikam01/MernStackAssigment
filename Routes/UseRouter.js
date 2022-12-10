const { application } = require('express')
const express =require ('express')
const router= express.Router()
const { Getdata }= require("../controllers/Usercontrol")
//======================================================================get==>
router.get("/", Getdata)

//========================================================================saved==>
router.post("/", (req, res, next) => {
    res.status(200).json({
        message: "saved users "
    })
})
//========================================================================update==>
router.put("/:id", (req, res, next) => {
    res.status(200).json({ message: `Update  user ${req.params.id}` })
})
//========================================================================Delete==>
router.delete("/:id", (req, res, next) => {
    res.status(200).json({ message: `Delete user ${req.params.id}` })
})



module.exports=router