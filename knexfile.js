const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile.js')[environment]

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/cartoons'
  },
  production: {
    client: 'pg',
    connection: process.env.DB_URL
  }
};
