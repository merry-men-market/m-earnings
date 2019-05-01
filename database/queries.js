const Pool = require('pg').Pool
const password = require('./password.js');

const earnings = new Pool({
  user: 'power_user',
  password: password,
  host: 'ec2-13-57-187-2.us-west-1.compute.amazonaws.com',
  database: 'earnings',
  port: 5432,
});


const getEarningsById = (request, response) => {
  const query = request.params.query;
    earnings.query(`SELECT * FROM quarter WHERE company_id = ${query}`, (error, results) => {
      if (error) {
        throw error
      }
      console.log('is working')
      response.status(200).json(results.rows)
    })
  }


module.exports.getEarningsById = getEarningsById;