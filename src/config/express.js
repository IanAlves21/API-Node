const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const consign = require('consign');

dotenv.config({
    path: process.env.NODE_ENV === "test" ? ".env.test" : ".env"
});

const logMiddleware = (request, response, next) => {
    console.log("\x1b[32m%s\x1b[0m",`REQUESTED METHOD [${request.method}] ON URL [${request.url}]`);
    next();
};

const router = require('../routes');
const app = express();

consign()
    .include('./src/controllers')
    .into(app);

app.use(logMiddleware);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/api', router);

module.exports = app;