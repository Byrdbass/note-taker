const express = require('express');
const path = require('path');
const fs = require('fs');
const PORT = 3001;
const noteData = require('./db/db.json')
// const { allowedNodeEnvironmentFlags } = require('process');

const app = express();


//app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) => res.send('Navigate to the public folder'))

app.get('/notes', (req, res) => 
    res.sendFile(path.join(__dirname, 'public/notes.html'))
);

app.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, 'public/index.html'))
);

//THIS IS NOT WORKING!
app.get('api/notes', (req, res) => {
    res.json(noteData);
    return res.json(noteData)
});

app.post('/api/notes', (req, res) => res.json(`${noteText}`))

app.listen(PORT, () => {
    console.log(`Example app listening at http://localHost:${PORT}`);
});