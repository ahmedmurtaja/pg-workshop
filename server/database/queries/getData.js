// Add code below to get users info from your database
const pool = require('../config/connection');
const getDATA = () => {
    return pool.query('SELECT * FROM users')
    .then(res => res.rows)
    .catch(err => console.log(err))
}

module.exports = getDATA;