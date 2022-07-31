const express = require("express");
const router = express.Router();
const users = require("../controllers/Users");

router.post("/register", users.register);
router.post("/login", users.login);
router.get("/", users.getUsers);
module.exports = router;
