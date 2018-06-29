const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller');
const massive = require('massive');
require('dotenv').config();

const app = express();
const port = 3025;

app.use(bodyParser.json());
massive(process.env.CONNECTION_STRING).then(dbInstance => {
  app.set('db', dbInstance)
}).catch(err => console.log(err));

app.get('/houses', controller.getAllHouses);
app.post('/houses', controller.addHouse);
app.delete('/houses/:id', controller.removeHouse);

app.listen(port, () => {
  console.log(`listening on ${port}`)
})