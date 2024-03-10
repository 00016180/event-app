const express = require('express');
const body_parser = require('body-parser');
const path = require('path');

const app = express();

global.mock_db = path.join(__dirname, './data/mock_db.json');

app.get('/', (req, res)=>{
    res.send('Hello world!')
});


const port = process.env.PORT || 3000;
app.listen(port, ()=>{console.log(`Listening in port ${port}`)});