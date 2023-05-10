const express = require('express');

const app = express();

app.use(express.json());
const artistRouter = require ('./routes/artist')


app.get("/", (_req, res) => {
  res.send("Hello World!");
});
app.use("/artists",artistRouter)

module.exports = app;