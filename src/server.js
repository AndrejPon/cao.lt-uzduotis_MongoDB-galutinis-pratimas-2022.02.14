console.log('Veikia');
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const { MongoClient } = require('mongodb');

const app = express();

const PORT = process.env.PORT || 5000;
const MONGO_CONNECTION_STRING = process.env.MONGO_DB_STRING;
// console.log('MONGO_CONNECTION_STRING===', MONGO_CONNECTION_STRING);
const dbClient = new MongoClient(MONGO_CONNECTION_STRING);

// Middleware
app.use(morgan('dev'));
// kad gauti duomenis json formatu
app.use(express.json());

// Routes
app.get('/test', (req, res) => res.send('Back end online'));

const membershipsRoutes = require('./routes/membershipsRoutes');
app.use('/', membershipsRoutes);

// Server
app.listen(PORT, console.log(`Server is running on port ${PORT}`));
