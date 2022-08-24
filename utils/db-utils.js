const mysql = require('promise-mysql')

const createConnection = async () => {
  return await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'checkmate_tournament'
  })
}

module.exports = { createConnection }