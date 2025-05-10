const Reminder = require("../models/Reminder");

exports.createReminder = async (req, res) => {
  try {
    const { date, message, remindBy } = req.body;

    if (!date || !message || !remindBy) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newReminder = new Reminder({ date, message, remindBy });
    await newReminder.save();

    res.status(201).json({ message: "Reminder saved successfully", data: newReminder });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
