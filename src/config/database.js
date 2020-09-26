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
        console.log('Connection to database has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = sequelize;