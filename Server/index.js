require("dotenv").config();
const express = require("express");
const app = express();
const massive = require("massive");
const session = require('express-session')
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET, STRIPE_SECRET_KEY } = process.env;
const {getShop, deleteOne, createOne, updateOne, addToCart} = require('./Controllers/ShopController')
const {registerUser, loginUser, getUser, logOutUser} = require('./Controllers/AuthController');
const {stripeCheckout} = require('./Controllers/CheckoutController')

// const stripe = require("stripe")(STRIPE_SECRET_KEY);
// const uuid = require("uuid/v4");
// const cors = require("cors");
// app.use(express.json());


massive(CONNECTION_STRING).then(db => {
  app.set("db", db);
  console.log(`Database is Connected :)`);
});


// app.get("/", (req, res) => {
//   res.send("Add your Stripe Secret Key to the .require('stripe') statement!");
// });


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

//cart endpoint


//checkout endpoint
app.post('/api/checkout', stripeCheckout)





app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`));
app.get("/", (req, res) => {
  res.send("Add your Stripe Secret Key to the .require('stripe') statement!");
});