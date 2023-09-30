const express = require('express');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 5000;


app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.get('/user', (req, res) => {
    res.send('you are on users page');
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
