const Contact = require('../models/contactModel');
// Créer un nouveau contact
exports.createContact = async (req, res) => {
    try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).send(contact);
    } catch (error) {
    res.status(400).send(error);
    }
    };
    exports.getAllContacts = async (req, res) => {
        try {
        const contacts = await Contact.find();
        res.status(200).send(contacts);
        } catch (error) {
        res.status(500).send(error);
        }
        };
// Obtenir un contact par ID
exports.getContactById = async (req, res) => {
    try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
    return res.status(404).send();
    }
    res.status(200).send(contact);
    } catch (error) {
    res.status(500).send(error);
    }
    };
 // Mettre à jour un contact
 exports.updateContact = async (req, res) => {
    try {
    const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true, 
   runValidators: true });
    if (!contact) {
    return res.status(404).send();
    }
    res.status(200).send(contact);
    } catch (error) {
    res.status(400).send(error);
    }
    };
// Supprimer un contact
exports.deleteContact = async (req, res) => {
    try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    if (!contact) {
    return res.status(404).send();
    }
    res.status(200).send(contact);
    } catch (error) {
    res.status(500).send(error);
    }
    };   