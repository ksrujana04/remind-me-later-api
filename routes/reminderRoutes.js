const express = require("express");
const router = express.Router();
const { createReminder } = require("../controllers/reminderController");

router.post("/", createReminder);

module.exports = router;
