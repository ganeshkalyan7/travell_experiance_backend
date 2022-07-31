const express = require("express");
const router = express.Router();
const pinFunctions = require("../controllers/Pins");

//create router
router.post("/create", pinFunctions.createPin);
router.get("/get", pinFunctions.getPin);

module.exports = router;
