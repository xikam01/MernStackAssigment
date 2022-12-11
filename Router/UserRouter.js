const express = require("express");
const router = express.Router();
const { GetingData,PostData,UPdataData,DeleteData } = require('../controllers/userContro')


router.get("/", GetingData)
router.post("/",PostData)

router.put("/:id", UPdataData)
router.delete("/:id",DeleteData)





module.exports = router