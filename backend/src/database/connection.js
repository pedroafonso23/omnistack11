const knex = require('knex')
const configuration = require('../../knexfile')

const connection = knex(configuration.development)

module.exports = connection // Exporting the connection with the database