const knex = require('knex');
const configuration = require('../../knexfile');


const comnection = knex(configuration.development);

module.exports = comnection;