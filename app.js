const express = require('express');
const body_parser = require('body-parser');
const path = require('path');
const web_route = require('./routes/web');
const app = express();

global.mock_db = path.join(__dirname, './data/mock_db.json');

app.set('view engine', 'pug');

app.use('/css', express.static('public/css'))
app.use('/js', express.static('public/js'))

app.use('/', web_route);

const port = process.env.PORT || 3000;
app.listen(port, ()=>{console.log(`Listening in port ${port}`)});