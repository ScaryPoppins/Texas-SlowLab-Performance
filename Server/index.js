require("dotenv").config();
const express = require("express");
const app = express();
const massive = require("massive");
const session = require('express-session')
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;
const {getShop, deleteOne, createOne, updateOne, addToCart} = require('./Controllers/ShopController')
const {registerUser, loginUser, getUser, logOutUser} = require('./controllers/AuthController');

app.use(express.json());


massive(CONNECTION_STRING).then(db => {
  app.set("db", db);
  console.log(`Database is Connected :)`);
});

//yummy
app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7
  }
}))


//auth endpoints
app.post('/auth/register', registerUser);
app.post('/auth/login', loginUser);
app.post('/auth/user', logOutUser);
app.get('/auth/user', getUser);



// shop endpoints
app.get('/api/shop', getShop);
app.delete('/api/shop/:id', deleteOne);
app.post('/api/shop', createOne);
app.put('/api/shop', updateOne)

app.post('/api/cart', addToCart)








app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`));
