const Reminder = require('../models/reminderModel');
// Créer un nouveau reminder
exports.createReminder = async (req, res) => {
    try {
    const reminder = new Reminder(req.body);
    await reminder.save();
    res.status(201).send(reminder);
    } catch (error) {
    res.status(400).send(error);
    }
    };
    exports.getAllReminders = async (req, res) => {
        try {
        const reminders = await Reminder.find();
        res.status(200).send(reminders);
        } catch (error) {
        res.status(500).send(error);
        }
        };
// Obtenir un reminder par ID
exports.getReminderById = async (req, res) => {
    try {
    const reminder = await Reminder.findById(req.params.id);
    if (!reminder) {
    return res.status(404).send();
    }
    res.status(200).send(reminder);
    } catch (error) {
    res.status(500).send(error);
    }
    };
 // Mettre à jour un reminder
 exports.updateReminder = async (req, res) => {
    try {
    const reminder = await Reminder.findByIdAndUpdate(req.params.id, req.body, { new: true, 
   runValidators: true });
    if (!reminder) {
    return res.status(404).send();
    }
    res.status(200).send(reminder);
    } catch (error) {
    res.status(400).send(error);
    }
    };
// Supprimer un reminder
exports.deleteReminder = async (req, res) => {
    try {
    const reminder = await Reminder.findByIdAndDelete(req.params.id);
    if (!reminder) {
    return res.status(404).send();
    }
    res.status(200).send(reminder);
    } catch (error) {
    res.status(500).send(error);
    }
    };   