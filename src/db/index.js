const { Pool } = require('pg')

 const pool = new Pool()

 module.exports = {
   query: (text, params) => pool.query(text, params)
 }
 // this exports an async function that we can use to connect to the database in other parts of our app.


 //the overhead .... ie when we establish a connection a few things happen
// The application uses a database driver to open a connection.
// A network socket is opened to connect the application and the database.
// The user is authenticated.
// The operation completes and the connection may be closed.
// The network socket is closed.


// We don't want to do that everytime as that adds time on to our API to respond to the user.
// and 2: we can use pooling to control and manage how many connections our app tries to make the database.
//with pool we established, we can take a connection, run a query with it and release it
// in this case, this library does all of that with query
// so we take pool (which is the instance of the Pool class we instanstiated with new Pool()
// this query function has two params
// first, it wants the query we with to run, and secondly it wants the paramaters that it is to change in the query text with our variables
// we are wraping that into a function ..... and passing it out of the file so you can use it elsewhere in the app

