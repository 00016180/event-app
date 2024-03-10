const event_service = require('../../../services/event/');

const event_controller = {
    getAll(req, res) {
        res.json(event_service.getAll());
    }
}

module.exports = event_controller;
