const express = require('express');
const mongoose = require('mongoose');
const emailRoutes = require('./routes/emailRoutes');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost/emailbuilder');

app.use('/api', emailRoutes);

app.listen(5000, () => console.log('Server running'));
