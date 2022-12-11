
const express = require('express')
const router = express.Router()
const { GetData, PostData, UpdateData, DeleteData } = require("../controllers/Usercontrol")

router.route('/').get(GetData).post(PostData)
router.route('/"id').put(UpdateData).delete(DeleteData)




module.exports = router