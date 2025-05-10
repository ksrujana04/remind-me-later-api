const mongoose = require("mongoose");

const reminderSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  remindBy: {
    type: String,
    enum: ["email", "sms"],
    required: true
  }
});

module.exports = mongoose.model("Reminder", reminderSchema);
