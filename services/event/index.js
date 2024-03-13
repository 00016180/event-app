const fs = require('fs');
const events = require('../../data/mock_db.json');

const event_service = {
    getAll() {
        return events;
    },
    getById(id) {
        return events.find(e => e.id == id);
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
    },
    delete(id) {
        const indexEvent = events.findIndex(e => e.id == id);
        events.splice(indexEvent, 1);  
        writeToFile(events);
    },
    update(id, updateData){
        const indexEvent = events.findIndex(e => e.id == id);

        if (indexEvent === -1) {
            return null;
        }

        events[indexEvent].event = { ...events[indexEvent].event, ...updateData };

        writeToFile(events);

        return events[indexEvent];
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
        );
}

function genRandId(count) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < count; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}


module.exports = event_service;
