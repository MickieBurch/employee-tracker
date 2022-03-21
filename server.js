//dependencies required
const mysql = require("mysql");
const inquirer = require("inquirer");
require("console.table");
//const sql = require("./sql");

//mysql connection
const connection = mysql.createConnection({
    host: 'localhost',

  
    port: 3306,


    user: 'root',


    password: 'Lillymoonheart13!',
    database: 'employees_DB'
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    console.log(``)
    // runs the app
    firstPrompt();
});

