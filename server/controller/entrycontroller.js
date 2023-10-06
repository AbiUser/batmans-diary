const Entry = require('../models/entry')
async function index(req, res) {
    try {
        const entries = await Entry.getAll();
        res.status(200).send(entries)
    } catch {
        res.status(500).send({"error": err.message})
    }
};

module.exports = index;