const { rows } = require('pg/lib/defaults');
const seed = require('../db/config')

const pool = seed;

/**
 * Get one user attendance by attendance_id
 * @param {*} req 
 * @param {*} res 
 */
 exports.getAllOneId = (req, res) => {
    let query = {
        text: 'SELECT emp_id, temp FROM attendance WHERE emp_id = $1 RETURNING emp_id, created_at',
        value: [req.body.emp_id]
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
/**
 * @param {*} req 
 * @param {*} res 
 */
 exports.getAll = (req, res) => {
    let query = 'SELECT a.attendance_id, a.emp_id, a.temp, a.created_at, e.name FROM attendance a INNER JOIN employees e ON a.emp_id = e.emp_id';
    
    pool.query(query)
        .then(data => {
            console.log(data.rows);
            return res.send(data.rows);
        })
        .catch(err => {
            console.log(err);
            res.send(err);
        })
},
/**
 * @param {*} req 
 * @param {*} res 
 */
 exports.attend = (req, res) => {
    let query = {
        body: 'INSERT INTO attendance (emp_id, temp) VALUES $1, $2',
        value:[req.body.emp_id, req.body.temp]
        }
    pool.query(query.body, query.value)
        .then(data => {
            console.log(data.rows);
            // return res.send(data.rows);
            return res.send({data: data.rows});
        })
        .catch(err => {
            console.log(err);
            res.send({error:err});
        })
}