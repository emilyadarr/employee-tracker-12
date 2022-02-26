const res = require('express/lib/response');
const db = require('./connection');

class DB {

  // Find all departments (presented with a formatted table showing department names and department ids)
  findAllDepartments() {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT * FROM department`,
      (err, results) => {
        if (err) {
          reject(err);
        }
        resolve(results);
      }
      );
    });
  }
  
  // Find all roles (presented with job title, role id, the department that role belongs to, and the salary for that role)
  findAllRoles() {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT role.id, role.title, role.salary, department.name
        FROM role
        LEFT JOIN department ON role.department_id = department.id`,
      (err, results) => {
        if (err) {
          reject(err);
        }
        resolve(results);
      }
      );
    });
  }
  // Find all employees (including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to)
  findAllEmployees() {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT employee.id, employee.first_name, employee.last_name, role.title AS job_title, role.salary, department.name AS department, managers.first_name AS manager_first_name, managers.last_name AS manager_last_name

          FROM employee
          LEFT JOIN role ON employee.role_id = role.id
          LEFT JOIN department on role.department_id = department.id
          LEFT JOIN employee managers ON managers.id = employee.manager_id`,
      (err, results) => {
        if (err) {
          reject(err);
        }
        resolve(results);
      }
      );
    });
  }
}

module.exports = new DB();