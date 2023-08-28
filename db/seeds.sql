-- Active: 1692316061004@@127.0.0.1@3306
-- Insert sample departments
INSERT INTO departments (name) VALUES
  ('Sales'),
  ('Marketing'),
  ('Engineering');

-- Insert sample roles
INSERT INTO roles (title, salary, department_id) VALUES
  ('Sales Manager', 70000, 1),
  ('Marketing Specialist', 55000, 2),
  ('Software Engineer', 80000, 3);

-- Insert sample employees
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES
  ('John', 'Doe', 1, NULL),
  ('Jane', 'Smith', 2, 1),
  ('Michael', 'Johnson', 3, 1);
