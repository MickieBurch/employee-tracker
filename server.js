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

{inquirer
.prompt({
  type: "list",
  name: "task",
  message: "Would you like to do?",
  choices: [
    "View Employees",
    "View Employees by Department",
    "Add Employee",
    "Remove Employees",
    "Update Employee Role",
    "Add Role",
    "End"]
})
.then(function ({ task }) {
  switch (task) {
    case "View Employees":
      viewEmployee();
      break;

    case "View Employees by Department":
      viewEmployeeByDepartment();
      break;
  
    case "Add Employee":
      addEmployee();
      break;

    case "Remove Employees":
      removeEmployees();
      break;

    case "Update Employee Role":
      updateEmployeeRole();
      break;

    case "Add Role":
      addRole();
      break;

    case "End":
      connection.end();
      break;
  }
});
}
