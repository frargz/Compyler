const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const app = express();

app.get('/endpoint-1', (request, response, next) => {
    response.status(200).json({
        success: true,
        data: {
            message: 'Hello from endpoint 1'
        }
    })
})
app.get('/endpoint-2', (request, response, next) => {
    response.status(200).json({
        success: true,
        data: {
            message: 'Hello from endpoint 2'
        }
    })
})

const PORT = process.env.PORT || 50001;
app.listen(PORT, () => console.log('server is running on this port $(PORT)'));
