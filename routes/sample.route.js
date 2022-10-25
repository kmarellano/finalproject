const express = require("express");
const router = express.Router();
const { sampleController } = require("../controllers");

router.route("/").get(sampleController.getSomething);

module.exports = router;
