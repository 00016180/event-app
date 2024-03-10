const fs = require('fs');
const events = require('../../data/mock_db.json');

const event_service = {
    getAll() {
        return events;
    },
    getById(id) {
        return events.find(t => t.id == id)
    }
}

module.exports = event_service;
