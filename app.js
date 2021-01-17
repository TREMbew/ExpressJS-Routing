const express = require('express');
const path = require('path')
const bodyParser = require('body-parser');

const homeRoute = require('./routes/home');
const servicesRoute = require('./routes/services');
const contactRoute = require('./routes/contact');
const workingTimeRoute = require('./routes/workingTime');

const app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public', 'stylesheet')));

let date = new Date();
let day = date.getDay();
let hours = date.getHours();
if( day < 6 && hours > 9 && hours < 20){
app.use(homeRoute);
app.use(servicesRoute);
app.use(contactRoute);
}else {
    app.use(workingTimeRoute);
}

app.listen(3000, () => {
    console.log('server is running on port 3000');
})