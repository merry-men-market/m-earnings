const Pool = require('pg').Pool

const earnings = new Pool({
  user: 'postgres',
  password: '$password',
  host: 'ec2-13-57-58-236.us-west-1.compute.amazonaws.com',
  database: 'earnings',
  port: 5432,
});


const getEarningsById = (request, response) => {
  const query = request.params.query;
    earnings.query(`SELECT * FROM quarter WHERE company_id = ${query}`, (error, results) => {
      if (error) {
        console.log('This error is made inside of queries.js in service: ',error);
        response.status(403);
      }
      // console.log('results: ', results);
      response.status(200).json(results.rows);
    })
  }


module.exports.getEarningsById = getEarningsById;