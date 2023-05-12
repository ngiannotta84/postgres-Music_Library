const db = require('../src/db')

    afterEach(async () => {
      await db.query('TRUNCATE Artists CASCADE')
    })

    //We are also going to want to delete all of the artists in our database after each test. 
    //To do this we can use a global afterEach hook. 
    //To do this, create a new file in your tests folder called helper.js. 
    //Mocha will automatically detect this file and run the code before all of our other tests.