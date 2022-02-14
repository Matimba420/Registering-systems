const { rows } = require('pg/lib/defaults');
const seed = require('../db/config')

const pool = seed;

exports.register = (req, res) => {
    let query = {
        text: 'INSERT INTO employees (emp_id, name, email, password) VALUES ($1, $2, $3, $4) RETURNING (emp_id, name, email)',
        value: [req.body.emp_id, req.body.name, req.body.email, req.body.password]
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
        text: 'SELECT email, password FROM employees WHERE email = $1 AND password = $2 RETURNING (name, email)',
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
