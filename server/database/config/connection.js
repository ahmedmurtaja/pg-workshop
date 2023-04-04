// Add code below to connect to your database

const pg = require('pg');
const Pool = pg.Pool;

const pool = new Pool( 
    {
        connectionString: process.env.DB_URL,
        ssl: false
    }
)




module.exports = pool;
        
