const db = require('../database/connect');
class Entry {
    constructor(entry) {
        this.entry_id = entry.entry_id
        this.created_at = entry.create_at
        this.updated_at = entry.updated_at
        this.category = entry.category
        this.text = entry.text
    }
    static async getAll() {
        const response = await db.query("SELECT * FROM entry");
        if(response.rows.length === 0) {
            throw new Error("No entries available")
        }
        return response.rows.map(entry => new Entry(entry));
    }
}

module.exports = Entry;