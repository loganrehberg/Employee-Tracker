## Employee Tracker
Employee Tracker is a command-line application for managing employee data in a company. This application provides a simple and efficient way to organize employee information, including their roles, departments, and managers. This repository contains the source code and assets for the Employee Tracker.
[![Watch the video](https://i.stack.imgur.com/Vp2cE.png)](https://drive.google.com/file/d/1U0qB0SFJvRixS7jwvwwAOqGgxoGVYy1k/view)


## Features
Add, view, update, and delete employees.
Manage employee roles and departments.
Assign managers to employees.
View employees by department or manager.
Interactive command-line interface.
Data stored in a relational database (e.g., MySQL).
Getting Started
Prerequisites
Before you get started, ensure you have the following software and tools installed on your system:

Node.js
npm
MySQL database
Installation
Clone the repository to your local machine:

git clone https://github.com/loganrehberg/Employee-Tracker.git
Navigate to the project directory:
cd Employee-Tracker
Install the project dependencies:

npm install
Set up your MySQL database. You can use the provided schema.sql and seed.sql files to create the necessary tables and seed initial data.

Configure the database connection by creating a .env file in the root directory and adding your database credentials. For example:

.env
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=your_password
DB_DATABASE=employee_db
Start the application:


node app.js
Follow the command-line prompts to interact with the Employee Tracker.

Usage
Add new employees, roles, and departments.
View the list of employees, roles, and departments.
Update employee information, including roles and managers.
Remove employees, roles, and departments as needed.
Generate reports to see employees by department or manager.
