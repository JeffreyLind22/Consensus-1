document.getElementById("btn").addEventListener("click", () => {

    var mysql = require("../../../Consensus Home Page/node_modules/mysql2");

    var connection = mysql.createConnection({
      host: "localhost",
      user: "jeffreylind",
      password: "Jefgillin2006!1",
      database: "ConsensusCoreData"
    });

    connection.connect((err) => {

      if(err) {
        return console.log(err.stack);
      }

      console.log("Connection Successful Yayy");

    });

    connection.query('SELECT * FROM `ConsensusCoreEmployees`', function(err, rows, fields) {
        if(err){
            console.log("An error ocurred performing the query.");
            console.log(err);
            return;
        }

        console.log("Query succesfully executed", rows);
    });

    connection.end(() => {
      console.log("Connection Closed Woo")
    });

  }, false);