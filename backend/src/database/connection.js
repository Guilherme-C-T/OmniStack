const knex = require('knex');
const environment = process.env.NODE_ENV || 'development';
const configuration = require('../../knexfile');

const config = process.env.NODE_ENV === 'test' ? configuration.test : configuration.development;

const connection = knex(configuration[environment]);

module.exports = connection;