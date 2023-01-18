require('../../../Consensus Home Page/node_modules/dotenv').config()

// Uses mysql2 npm package to support MySQL caching_sha2_password https://stackoverflow.com/questions/50093144/mysql-8-0-client-does-not-support-authentication-protocol-requested-by-server
var MySQL2 = require("../../../Consensus Home Page/node_modules/mysql2"); 

var MySQL2Connection = MySQL2.createConnection({ 
  host: process.env.ConsensusCoreDataConnectionHost,
  user: process.env.ConsensusCoreDataConnectionUser,
  password: process.env.ConsensusCoreDataConnectionPassword,
  database: process.env.ConsensusCoreDataConnectionDatabase
});

MySQL2Connection.connect((err) => {

  if(err) {

    return console.log(err.stack);

  }

  console.log("Connection Successful Yayy");

});

MySQL2Connection.query('SELECT * FROM `ConsensusCoreEmployees`', function(err, rows, fields) {

    if(err){

        console.log(`An error ocurred performing the query: \n ${err}`);

        return;

    }

    console.log("Query succesfully executed", rows);

});

MySQL2Connection.end(() => {

  console.log("Connection Closed Woo")
  
});