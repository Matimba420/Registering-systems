const { rows } = require('pg/lib/defaults');
const seed = require('../db/config')

const pool = seed;

exports.register = (req, res) => {
    let query = {
        text: 'INSERT INTO employees (name, email, emp_id,  password) VALUES ($1, $2, $3, $4) RETURNING (emp_id, name, email)',
        value: [req.body.name, req.body.email, req.body.emp_id, req.body.password]
    }
    pool.query(query.text, query.value)
        .then(data => {
            console.log(data.rows);
            return res.send(data.rows);
        })
        .catch(err => {
            console.log(err);
            res.send(err);
        })
},
exports.logIn = (req, res) => {
    let query = {
        text: 'SELECT name, email, password FROM employees WHERE email = $1 AND password = $2',
        value: [req.body.email, req.body.password]
    }
    pool.query(query.text, query.value)
        .then(data => {
            console.log(data.rows);
            return res.send(data.rows);
        })
        .catch(err => {
            console.log(err);
            res.send(err);
        })
}

exports.logInAdmin = (req, res) => {
    let query = {
        text: 'SELECT * FROM admin WHERE email = $1 AND password = $2',
        value: [req.body.emailAdmin, req.body.passwordAdmin]
    }
    pool.query(query.text, query.value)
        .then(data => {
            console.log(data.rows);
            return res.send(data.rows);
        })
        .catch(err => {
            console.log(err);
            res.send(err);
        })
}