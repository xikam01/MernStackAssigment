const express = require("express");
const router = express.Router();



router.get("/", (req, res,) => {
    res.json({
        Message: "Geting Uusers"
    })
})
router.post("/", (req, res,) => {
    res.json({
        Message: "Create User"
    })
})
router.put("/:id", (req, res,) => {
    res.json({
        Message: `update user ${req.params.id}`
    })
})
router.delete("/:id", (req, res,) => {
    res.json({
        Message: `delete user ${req.params.id}`
    })
})





module.exports = router