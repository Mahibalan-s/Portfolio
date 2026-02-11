const express = require("express");

const router = express.Router();
const { createMessage,getMessages } = require("../controllers/contactcontroller");
const protect = require("../middleware/auth");
router.get("/", protect, getMessages);

router.post("/", createMessage);

router.get("/", protect, getMessages);


module.exports = router;
