const express = require('express')
const inquirer = require("inquirer");
const mysql = require("mysql2");

const PORT = process.env.PORT || 3001;
const app = express();

//MySQL connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Emwlmrkew0912!",
  database: "company_db",
});

connection.connect();

//Function to start app
function startApp() {
  //present options to user via inquirer
  inquirer
    .prompt([
      {
        type: "list",
        name: "action",
        message: "What would you like to do",
        choices: [
          "View all departments",
          "View all roles",
          "View all employees",
          "Add a department",
          "Add a role",
          "Add an employee",
          "Update an employee role",
          "Exit",
        ],
      },
    ])
    .then((answer) => {
      //call the appropriate function based on user input
      switch (answer.action) {
        case "View all Departments":
          viewDepartments();
          break;
        case "View all roles":
          viewRoles();
          break;
        case "View all employees":
          viewRoles();
          break;
        case "Add a department":
          viewRoles();
          break;
        case "Add a role":
          viewRoles();
          break;
        case "Add an employee":
          viewRoles();
          break;
        case "Update an employee role":
          viewRoles();
          break;
        case "Exit":
          connection.end();
          break;
      }
    });
}

// function to view all departments
function viewDepartments() {
  connection.query("SELECT * FROM departments", (err, res) => {
    if (err) throw err;
    console.table(res);
    startApp();
  });
}

//Function to view all roles
function viewRoles() {
  connection.query("SELECT * FROM roles", (err, res) => {
    if (err) throw err;
    console.table(res);
    startApp();
  });
}

//Function to view all employees
function viewEmployees() {
  connection.query("SELECT * FROM employees", (err, res) => {
    if (err) throw err;
    console.table(res);
    startApp();
  });
}
//Function to add a department
function addDepartment() {
  connection.query("SELECT * FROM departments", (err, res) => {
    if (err) throw err;
    console.table(res);
  });
}
//Function to add a role
function addRole() {
  connection.query("SELECT * FROM roles", (err, res) => {
    if (err) throw err;
    console.table(res);
  });
}

//Function to add an employee

function addEmployee() {
  connection.query("SELECT * FROM employees", (err, res) => {
    if (err) throw err;
    console.table(res);
  });
}

//Function to update an employee role
function updateEmployee() {
  connection.query("SELECT * FROM employees", (err, res) => {
    if (err) throw err;
    console.table(res);
  });
}

function init() {
    console.log(`You have entered 'Insert Company Name here' Database, please select what you would like to view.`);

}

init();
startApp();

