require("dotenv").config();
const express = require("express");
const app = express();
const massive = require("massive");
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;
const {getShop, deleteOne, createOne, updateOne} = require('./Controllers/ShopController')

app.use(express.json());


massive(CONNECTION_STRING).then(db => {
  app.set("db", db);
  console.log(`Database is Connected :)`);
});


app.get('/api/shop', getShop);
app.delete('/api/shop/:id', deleteOne);
app.post('/api/shop', createOne);
app.put('/api/shop', updateOne)

app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`));
