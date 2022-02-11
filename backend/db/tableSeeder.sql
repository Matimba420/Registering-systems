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
    emp_id VARCHAR(5) UNIQUE NOT NULL,
    temp VARCHAR(5) NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
