const dotenv = require('dotenv');
dotenv.config();

const path = require('path');

const express = require('express');
const app = express();
app.use(express.static('public'));
app.use(express.json({limit: '1mb'}));

//const {exec} = require('child_process');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.post('/api', (req, res) => {
    data = req.body
    console.log(req);
    res.end();
});

const PORT = process.env.PORT;
app.listen(5000, () => {
    console.log(`server is running on this port ${PORT}`);
});
