const inquirer = require("inquirer");
const mysql = require("mysql");

//MySQL connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "your_user",
  password: "your_password",
  database: "your_database",
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
    startApp();
  });
}
//Function to add a role
function addRole() {
  connection.query("SELECT * FROM roles", (err, res) => {
    if (err) throw err;
    console.table(res);
    startApp();
  });
}

//Function to add an employee

function addEmployee() {
  connection.query("SELECT * FROM employees", (err, res) => {
    if (err) throw err;
    console.table(res);
    startApp();
  });
}

//Function to update an employee role
function updateEmployee() {
  connection.query("SELECT * FROM employees", (err, res) => {
    if (err) throw err;
    console.table(res);
    startApp();
  });
}

//function to start app 
startApp();

