const express = require("express");
const app = express();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const uuid = require("uuid/v4");
const cors = require("cors");

app.use(cors());



  // stripe checkout
 const stripeCheckout =  async (req, res) => {
  const db = req.app.get('db')
    console.log("Request:", req.body);
  
    let error;
    let status;
    let address;

    const {token, total, products} = req.body;



var checkoutItems = () => {

  let items = '';
  for(i=0; i<products.length; i++){
      items += `${products[i].title}`
        if(i < products.length-1){
          items+=', '
        }
      }
      return items
}



    try {

      let items = '';
      for(i=0; i<products.length; i++){
          items += `${products[i].title}`
            if(i < products.length-1){
              items+=', '
            }
      }
      
      // checkoutItems()


  
      const customer = await stripe.customers.create({
        email: token.email,
        source: token.id
      });
  
      const idempotency_key = uuid();
      const charge = await stripe.charges.create(
        {
          amount: total * 100,

          currency: "usd",

          customer: customer.id,

          receipt_email: token.email,
          description: `${items}`,
          // description: title ,


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
      address = {charge}

    } catch (error) {
      console.error("Error:", error);
      status = "failure";
    }
    
    if (status = 'success'){

//put things into database----------------------------------------------------------------------

     db.create_order(req.session.user.id, total, checkoutItems())


//-----------------------------------------------
      req.session.user.cart = []
      req.session.user.total = 0

    }
    let cart = req.session.user.cart




    res.json({ error, status, address, cart});
  };
  



  module.exports = {
    stripeCheckout
  };
