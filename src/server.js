console.log('Veikia');
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
// const { MongoClient } = require('mongodb');

const app = express();

const PORT = process.env.PORT || 5000;
// const MONGO_CONNECTION_STRING = process.env.MONGO_DB_STRING;
// const dbClient = new MongoClient(MONGO_CONNECTION_STRING);

// console.log('MONGO_CONNECTION_STRING===', MONGO_CONNECTION_STRING);
// Middleware
app.use(morgan('dev'));
// kad gauti duomenis json formatu
app.use(express.json());
