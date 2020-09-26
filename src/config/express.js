const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const consign = require('consign');

dotenv.config({
    path: process.env.NODE_ENV === "test" ? ".env.test" : ".env"
});

const router = require('../routes');

const app = express();

consign()
    .include('./src/controllers')
    .into(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/api', router);

module.exports = app;