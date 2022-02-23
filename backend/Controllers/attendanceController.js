const { rows } = require('pg/lib/defaults');
const seed = require('../db/config')

const pool = seed;

/**
 * Get one user attendance by attendance_id
 * @param {*} req 
 * @param {*} res 
 */
 exports.getAllOneId = (req, res) => {
     console.log(req.params.emp_id);
    let query = {
        text: "SELECT attendance.emp_id, attendance.temp, attendance.have_covid, attendance.created_at, employees.name from attendance INNER JOIN employees ON attendance.emp_id = employees.emp_id WHERE attendance.emp_id = $1",
        value: [req.params.emp_id]
    }
    pool.query(query.text, query.value)
        .then(data => {
            console.log(data);
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
    let query = 'select attendance.emp_id, attendance.temp, attendance.created_at, employees.name from attendance INNER JOIN employees ON attendance.emp_id = employees.emp_id';
    
    pool.query(query)
        .then(data => {
            // console.log(data.rows);
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
        text: 'INSERT INTO attendance (emp_id, temp, have_covid) VALUES ($1, $2, $3) RETURNING *',
        value:[req.params.emp_id, req.params.temp, req.params.have_covid]
        }
    pool.query(query.text, query.value)
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