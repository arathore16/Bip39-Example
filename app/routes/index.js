const express = require("express");
const router = express.Router();

const bipRouter = require("./bip");

router.use("/bip", bipRouter);

module.exports = router;