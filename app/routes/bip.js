const express = require("express");
const bipController = require("../controllers/bipController");
const router = express.Router();

router.post("/generate/address", bipController.generateAddressess);

module.exports = router;
