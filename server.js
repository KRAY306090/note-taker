//const fs = require('fs');
//const path = require('path');

const { notes } = require('./db/db');
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

app.get('/api/notes', (req, res) => {
    //let results = notes;
    res.json(notes);
});
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}`);
});