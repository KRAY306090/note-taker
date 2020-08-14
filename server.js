//const fs = require('fs');
//const path = require('path');

const { notes } = require('./db/db');
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

// app.post('/api/notes', (req, res) => {
// })
function findById(id, notesArray) {
    const result = notesArray.filter(note => note.id === id)[0];
    return result;
}
app.get('/api/notes', (req, res) => {
    let results = notes;
    console.log(req.query);
    res.json(results);
});
app.get('/api/notes/:id', (req, res) => {
    const result = findById(req.params.id, notes);
    res.json(result);
})
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}`);
});
