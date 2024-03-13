// import libraries
const express = require('express');
const path = require('path');
const app = express();

const web_route = require('./routes/web');
const api_route = require('./routes/api');

// make database globally through app
global.mock_db = path.join(__dirname, './data/mock_db.json');

app.set('view engine', 'pug');
  
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use('/css', express.static('public/css'));
app.use('/js', express.static('public/js'));

app.use('/', web_route);     
app.use('/api', api_route);

app.use('/', (req, res)=>{
    res.redirect('/')
});

// app listening in 
const port = process.env.PORT || 3000;
app.listen(port, ()=>{console.log(`Listening in port ${port}`)}); 