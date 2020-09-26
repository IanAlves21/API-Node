const user = require('../models/user');
const Sequelize = require('sequelize');
const mysqlConnection = require('../config/database');

async function get(id) {
    return await user.user(mysqlConnection, Sequelize).findOne({
        where: {
            id: id
        }
    });
}

async function getAll() {
    return await user.user(mysqlConnection, Sequelize).findAll();
}

async function post(p) {
    await user.user(mysqlConnection, Sequelize).create(p);
}

async function put(p) {
    await user.user(mysqlConnection, Sequelize).update(p, { where: { id: p.id } });
}

async function del(id) {
    await user.user(mysqlConnection, Sequelize).destroy({ where: { id: id } });
}

module.exports = { get, getAll, post, put, del };