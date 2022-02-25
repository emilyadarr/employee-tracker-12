use employees;

INSERT INTO department (name)
VALUES
('Sales'),
('Engineering'),
('Finance'),
('Legal');

INSERT INTO role (title, salary, department_id)
VALUES
('Salesperson', 80000, 1),
('Sales Manager', 100000, 1),
('Software Engineer', 120000, 2),
('Lead Engineer', 150000, 2),
('Accountant', 125000, 3),
('Account Manager', 160000, 3),
('Lawyer', 190000, 4),
('Legal Team Lead', 250000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Andrew', 'Allen', 2, NULL),
('Sally', 'Stan', 1, 1),
('Cassie', 'Clark', 4, NULL),
('Billy', 'Brown', 3, 3),
('Ethan', 'Evans', 6, NULL),
('Derek', 'Dole', 5, 5),
('Greta', 'Green', 8, NULL),
('Frankie', 'Finn', 7, 7);