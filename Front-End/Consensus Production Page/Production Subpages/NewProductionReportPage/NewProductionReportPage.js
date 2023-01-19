require('../../../Consensus Home Page/node_modules/dotenv').config();

// Uses mysql2 npm package to support MySQL caching_sha2_password https://stackoverflow.com/questions/50093144/mysql-8-0-client-does-not-support-authentication-protocol-requested-by-server
var MySQL2 = require("../../../Consensus Home Page/node_modules/mysql2"); 

const ConsensusCoreDataConnection = MySQL2.createPool({

  host: process.env.ConsensusCoreDataConnectionHost,
  user: process.env.ConsensusCoreDataConnectionUser,
  password: process.env.ConsensusCoreDataConnectionPassword,
  database: process.env.ConsensusCoreDataConnectionDatabase
  
}).promise();

async function TestConsensusCoreDataQuery() {

  const [rows] = await ConsensusCoreDataConnection.query("SELECT * FROM ConsensusCoreEmployees");

  return rows;

};

console.log(TestConsensusCoreDataQuery());