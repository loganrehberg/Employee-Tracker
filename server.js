const express = require("express");
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
        case "View all departments":
          viewDepartments();
          break;
        case "View all roles":
          viewRoles();
          break;
        case "View all employees":
          viewEmployees();
          break;
        case "Add a department":
          addDepartment();
          break;
        case "Add a role":
          addRole();
          break;
        case "Add an employee":
          addEmployee();
          break;
        case "Update an employee role":
          updateEmployee();
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
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter new Department",
        name: "department",
      },
    ])
    .then((response) => {
      connection.query(
        "INSERT INTO departments (name) VALUES (?)",
        response.department,
        (err, res) => {
          if (err) throw err;
          viewDepartments();
        }
      );
    });
}
//Function to add a role
function addRole() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "enter title name",
        name: "Title",
      },
      {
        type: "input",
        message: "Enter salary",
        name: "Salary",
      },
      {
        type: "input",
        message: "Enter Department id",
        name: "Department",
      },
    ])
    .then((response) => {
      connection.query(
        "INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)",
        [response.Title, response.Salary, response.Department],
        (err, res) => {
          if (err) throw err;
          viewRoles();
        }
      );
    });
}

//Function to add an employee

function addEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter first name",
        name: "first_name",
      },
      {
        type: "input",
        message: "Enter last name",
        name: "last_name",
      },
      {
        type: "input",
        message: "Enter role_id",
        name: "role_id",
      },
      {
        type: "input",
        message: "Enter manager_id",
        name: "manager_id",
      },
    ])
    .then((response) => {
      connection.query(
        "INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)",
        [
          response.first_name,
          response.last_name,
          response.role_id,
          response.manager_id,
        ],
        (err, res) => {
          if (err) throw err;
          viewEmployees();
        }
      );
    });
}

//Function to update an employee role
function updateEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Input role id",
        name: "role_id",
      },
      {
        type: "input",
        message: "input employee id",
        name: "employee_id",
      },
    ])
    .then((response) => {
      connection.query("UPDATE employees SET role_id = ? WHERE id = ?", [response.role_id, response.employee_id], (err, res) => {
        if (err) throw err;
        viewEmployees()
      });
    });
}

function init() {
  console.log(
    `You have entered 'Insert Company Name here' Database, please select what you would like to view.`
  );
}

init();
startApp();
