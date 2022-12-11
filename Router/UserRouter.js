const express = require("express");
const router = express.Router();
const { GetingData, PostData, UPdataData, DeleteData } = require('../controllers/userContro')

router.route('/').get(GetingData).post(PostData)
router.route('/:id').put(UPdataData).delete(PostData)







module.exports = router