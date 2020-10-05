require('./db');
const express = require('express');
const cors = require('cors');

var app = express();
app.use(cors({origin: 'http://localhost:3000'}))
app.use(express.json())    
app.use(express.urlencoded({ extended: false }))
app.use(require('./routes'));
app.listen(4000, () => console.log('Server started at port 4000'))