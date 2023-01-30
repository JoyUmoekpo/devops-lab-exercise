require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const path = require('path');
const app = express();
const {ROLLBAR_TOKEN} = process.env


app.use(express.json());
app.use(cors());
app.use(express.static('public'))

var Rollbar = require('rollbar')
var rollbar = new Rollbar({
    accessToken: ROLLBAR_TOKEN,
    captureUncaught: true,
    captureUnhandledRejections: true,
})

rollbar.log('Hello world!')
rollbar.error('There was an error.')
rollbar.critical("Here's a warning!")


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/index.html'))
})

app.listen(4000, () => {
    console.log(`Listening on 4000`)
})
