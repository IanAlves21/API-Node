const user = require('../models/user');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_NAME,process.env.DATABASE_USER, process.env.DATABASE_PASSWORD, {
    host: "",
    port: process.env.DATABASE_PORT,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

async function get(id) {
    return await user.user(sequelize, Sequelize).findOne({
        where: {
            id: id
        }
    });
}

async function getAll() {
    return await user.user(sequelize, Sequelize).findAll();
}

async function post(p) {
    await user.user(sequelize, Sequelize).create(p);
}

async function put(p) {
    await user.user(sequelize, Sequelize).update(p, { where: { id: p.id } });
}

async function del(id) {
    await user.user(sequelize, Sequelize).destroy({ where: { id: id } });
}

module.exports = { get, getAll, post, put, del };