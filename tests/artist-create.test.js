// tests/artist-create.js. Now that we have a way to connect to the database(db inport) within the app, we can modify our tests...
// the dB.query returns an object. Inside this object is a property called rows which is being 
//accessed using destructuring, rows has a value which is an array of objects, an object for each row 
//found in the dB returned that satisfies the query. Since this query is based on the id then 
//it should be expected that there is only one element in the rows array. 

const { expect } = require('chai');
const request = require('supertest');
const db = require('../src/db');
const app = require('../src/app');

describe('create artist', () => {
  describe('/artists', () => {
    describe('POST', () => {
      it('creates a new artist in the database', async () => {
        const { status, body } = await request(app).post('/artists').send({
          name: 'Tame Impala',
          genre: 'rock',
        });

        expect(status).to.equal(201);
        expect(body.name).to.equal('Tame Impala');
        expect(body.genre).to.equal('rock');

        const {
          rows: [artistData],
        } = await db.query(`SELECT * FROM Artists WHERE id = ${body.id}`);
        expect(artistData.name).to.equal('Tame Impala');
        expect(artistData.genre).to.equal('rock');
      });
    });
  });
});
