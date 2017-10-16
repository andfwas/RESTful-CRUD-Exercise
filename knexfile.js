const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile.js')[environment]

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/cartoons'
  },
  production: {
    client: 'pg',
    connection: 'postgres://fzfrmuixfokbas:0bd4072a55025e00e451c5382533ca6c45aff5cb4de55627a4075d613aadc85a@ec2-23-23-249-169.compute-1.amazonaws.com:5432/dc7fljac0j89k0?ssl=true'
  }
};
