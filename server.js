'use strict';
require('dotenv').config();

const express = require('express');
const path = require('path');
const app = express();

const port = 3002;


app.use(express.static(__dirname + '/src'));

app.get('/', async (req, res) => {
    try {
        res.sendFile('/index.html');
    } catch(error) {
        res.status(500).end();
    }
});

app.get('/post', async (req, res) => {
    try {
        res.sendFile(path.join(__dirname + '/src/post.html'));
    } catch(error) {
        res.status(500).end();
    }
});

app.get('/services', async(req, res) => {
    try {
        res.sendFile(path.join(__dirname + '/src/services.html'));
    } catch(error) {
        res.status(500).end();
    }
})

app.listen(port, function () {
	console.log(`Server listening port ${port}`);
});
