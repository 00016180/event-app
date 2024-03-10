const fs = require('fs');
const events = require('../../data/mock_db.json');

const event_service = {
    getAll() {
        return events;
    },
    create(req, res) {
        let new_id = genRandId(5);
                
        const event = req.body;

        const new_event = {
            id: new_id,
            event: event
        };

        events.push(new_event);
        writeToFile(events);
        return new_event;
    }
}

async function writeToFile(users) {
    await 
        fs.writeFileSync(
            global.mock_db,
            JSON.stringify(
                users, null, 5
            ),
            'utf8'
        )
}

// generate random id inspired by uuid
function genRandId(count) {
    let result = ''
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    const charactersLength = characters.length
    for (let i = 0; i < count; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }
    return result
}


module.exports = event_service;