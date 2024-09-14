const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// POST endpoint
app.post('/store', (req, res) => {
    const data = req.body; // Capture data sent from frontend
    console.log('Received data:', data);

    // Here you can process the data, pass it to your ML model, etc.
    // For now, let's just send a success response
    res.json({ success: true, message: 'Data received successfully' });
});

app.listen(3000, () => {
    console.log(`Server running at http://localhost:${3000}`);
});
