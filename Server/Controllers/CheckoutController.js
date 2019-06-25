const express = require("express");
const app = express();
const stripe = require("stripe")("pk_test_N28zSeEZWZAop3ldDO2V06KK00dbhX8RRs");
const uuid = require("uuid/v4");
const cors = require("cors");

app.use(cors());


//add address
const addAddress = (req,res) => {
    const db = req.app.get('db'),
        {firstName, lastName, address1, address2, city, state, zip, country} = req.body;
  
    db.add_address(firstName, lastName, address1, address2, city, state, zip, country, req.session.user.id)
        .then(response => res.status(200).send(response))
        .catch(error => res.status(500).send(`addAddress: ${error}`))
  }

//see checkout info JOINS address and cc
const getCheckoutInfo = async (req, res) => {
    const reply = await req.app
      .get("db")
      .get_checkout_info()
      .catch(error => {
        console.log(error);
        res.status(500).json("Server Error in getCheckoutInfo on CheckoutController");
      });
    res.status(200).json(reply);
  };







  // stripe checkout
 const stripeCheckout =  async (req, res) => {
    console.log("Request:", req.body);
  
    let error;
    let status;
    try {
      const { product, token } = req.body;
  
      const customer = await stripe.customers.create({
        email: token.email,
        source: token.id
      });
  
      const idempotency_key = uuid();
      const charge = await stripe.charges.create(
        {
          amount: product.price * 100,
          currency: "usd",
          customer: customer.id,
          receipt_email: token.email,
          description: `Purchased the ${product.name}`,
          shipping: {
            name: token.card.name,
            address: {
              line1: token.card.address_line1,
              line2: token.card.address_line2,
              city: token.card.address_city,
              country: token.card.address_country,
              postal_code: token.card.address_zip
            }
          }
        },
        {
          idempotency_key
        }
      );
      console.log("Charge:", { charge });
      status = "success";
    } catch (error) {
      console.error("Error:", error);
      status = "failure";
    }
  
    res.json({ error, status });
  };
  



  module.exports = {
    stripeCheckout
  };
