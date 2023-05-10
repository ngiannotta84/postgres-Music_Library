const { Pool } = require('pg')

 const pool = new Pool()

 module.exports = {
   query: (text, params) => pool.query(text, params)
 }
 // this exports an async function that we can use to connect to the database in other parts of our app.