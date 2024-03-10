const event_service = require('../../../services/event/');

const event_controller = {
    getAll(req, res) {
        res.json(event_service.getAll());
    },
    create(req, res) {
        res.status(201).json(
            event_service.create(req, res)
        );
    }

}

module.exports = event_controller;
