const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/donate', (req, res) => {
    const { frequency, amount } = req.body;
    // Process donation here
    res.send('Donation successful! Thank you for your support.');
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
