const express = require('express');
const router = express.Router();

const event_controller = require('../../../controllers/api/event');

router.get('/', (req, res)=>{
    event_controller.getAll(req, res);
}); 

module.exports = router;