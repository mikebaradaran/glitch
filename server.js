const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.json());

let data = [];
const PORT = 4000; // You can change this to any available port

app.get('/api/get', (req, res) => {
    res.json({ data });
});

app.post('/api/data', (req, res) => {
    const newData = req.body;
    data.push(newData);
    res.status(201).json({ message: 'Data received successfully', data: newData });
});

app.post('/api/kill', (req, res) => {
    data.length = 0;
    res.status(201).json({ message: 'All Data cleared'});
});

app.post('/api/wipe', (req, res) => {
    data.forEach(element => {
        element.message = "";
    });
    res.status(201).json({ message: 'All messages wiped'});
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
