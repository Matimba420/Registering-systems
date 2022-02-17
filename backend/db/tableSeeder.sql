--EMP TABLE
DROP TABLE IF EXISTS employees CASCADE;
CREATE TABLE employees(
    user_id SERIAL PRIMARY KEY,
    emp_id INTEGER UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

INSERT INTO employees(emp_id, name, email, password)
VALUES
('12345','shiba', 'shiba@email.com', 'shiba123'),
('12346','lesho', 'lesho@email.com', 'lesho123'),
('12347','zizipho', 'zizipho@email.com', 'zizipho123'),
('12348','kgomotso', 'kgomotso@email.com', 'kgomotso123'),
('12349','letlhogonolo', 'letlhogonolo@email.com', 'letlhogonolo123');

--ATTENDANCE TABLE
DROP TABLE IF EXISTS attendance CASCADE;
CREATE TABLE attendance(
    attendance_id SERIAL PRIMARY KEY,
    emp_id INTEGER UNIQUE NOT NULL,
    temp VARCHAR(5) NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

--ADMIN TABLE
DROP TABLE IF EXISTS admin CASCADE;
CREATE TABLE admin(
    admin_id SERIAL PRIMARY KEY,
    admin_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    emp_id INTEGER UNIQUE NOT NULL,
    FOREIGN KEY(emp_id) REFERENCES employees (emp_id)
);

INSERT INTO admin(admin_name, email, password, emp_id)
VALUES
('admin', 'admin@email.com', 'admin123', '12345');
INSERT INTO admin(admin_name, email, password, emp_id)
VALUES
('mel', 'mel@email.com', 'admin123', '12345');


INSERT INTO attendance(emp_id, temp)
VALUES
('593', '36.7')
('12347','36.2'),
('12348','35.4'),
('12349','33.3');


select attendance.emp_id, attendance.temp, attendance.created_at, employees.name from attendance INNER JOIN employees ON attendance.emp_id = employees.emp_id
SELECT attendance.emp_id, attendance.temp, attendance.created_at, employees.name from attendance INNER JOIN employees ON attendance.emp_id = employees.emp_id WHERE emp_id ='12346'

