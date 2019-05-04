const Pool = require('pg').Pool
const redis = require('redis');
const client = redis.createClient();

const earnings = new Pool({
  user: 'postgres',
  password: '$password',
  host: 'ec2-18-144-52-71.us-west-1.compute.amazonaws.com',
  database: 'earnings',
  port: 5432,
});


const getEarningsById = (request, response) => {
  const query = request.params.query;
  client.get(query, (error, result) => {
    if (result) {
      // console.log("result from redis ", result);
      response.status(200).send(result);
    } else {
      earnings.query(`SELECT * FROM quarter WHERE company_id = ${query}`, (error, results) => {
        if (error) {
          // console.log('This error is made inside of queries.js in service: ',error);
          response.status(403);
        } else {
          // console.log("results rows => ", results.rows)
          client.set(query, JSON.stringify(results.rows));
          response.status(200).json(results.rows);
        }
      })
    }
  })
}


client.on('error',(err)=>{
  console.log("error",err);
  return err;
});

module.exports.getEarningsById = getEarningsById;