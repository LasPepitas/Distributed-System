import mysql from 'mysql2/promise'

const pool = mysql.createPool({
    connectionLimit: 10,
    queueLimit: 0,
    host: '192.250.227.17',
    user: 'endogast_vic',
    database: 'endogast_system',
    password: 'fRLRo!=&cl$e'
})

console.log('Connected to MySQL')

export { pool }
