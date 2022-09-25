const dotenv = require('dotenv');
dotenv.config();

const path = require('path');

const express = require('express');
const app = express();

//const {exec} = require('child_process');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
});
app.get('/endpoint-2', (request, response, next) => {
    response.status(200).json({
        success: true,
        data: {
            message: 'Hello from endpoint 2'
   }
    })
})

//app.post('/api', (req, res) => {
//    console.log(req);
//    res.end();
//});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`server is running on this port ${PORT}`));
