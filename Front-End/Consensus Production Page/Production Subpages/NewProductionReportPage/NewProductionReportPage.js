// Allows for using the .env file located in /Consensus Home Page for MySQL database .createPool method
require('../../../Consensus Home Page/node_modules/dotenv').config();

// Uses mysql2 npm package to support MySQL caching_sha2_password https://stackoverflow.com/questions/50093144/mysql-8-0-client-does-not-support-authentication-protocol-requested-by-server
var MySQL2 = require("../../../Consensus Home Page/node_modules/mysql2"); 

// Connects To MySQL ConsensusCoreData Database
const ConsensusCoreDataConnection = MySQL2.createPool({

  host: process.env.ConsensusCoreDataConnectionHost,
  user: process.env.ConsensusCoreDataConnectionUser,
  password: process.env.ConsensusCoreDataConnectionPassword,
  database: process.env.ConsensusCoreDataConnectionDatabase
  
}).promise();

// Example MySQL Query -- Whole Table
async function WholeTableQuery() {

  const [rows] = await ConsensusCoreDataConnection.query("SELECT * FROM ConsensusCoreEmployees");

  return rows;

};

console.log(WholeTableQuery());

// Example MySQL Query -- Whole Row Per EmployeeID
async function IndexedQuery(id) {

  const [rows] = await ConsensusCoreDataConnection.query(`SELECT * FROM ConsensusCoreEmployees WHERE EmployeeID = ?`, [id]);

  return rows[0];

};

console.log(IndexedQuery(2));

// Example MySQL Query -- Insert Employee Into ConsensusCoreEmployees -- DO NOT UNCOMMENT UNLESS YOU PLAN TO DELETE THE DATABASE ENTRY
/*
async function InsertQuery(EmployeeFirstName, EmployeeLastName) {

  const result = await ConsensusCoreDataConnection.query(`INSERT INTO ConsensusCoreEmployees (EmployeeFirstName, EmployeeLastName) VALUES (?, ?)`, [EmployeeFirstName, EmployeeLastName]);

  return result;

}

await InsertQuery('First_Name', 'Last_Name');
*/
