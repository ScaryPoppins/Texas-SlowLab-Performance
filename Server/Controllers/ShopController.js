// const express = require("express");
// const app = express();



//see shop
const getShop = async (req, res) => {
    const reply = await req.app
      .get("db")
      .get_shop()
      .catch(error => {
        console.log(error);
        res.status(500).json("Server Error in getShop on ShopController");
      });
    res.status(200).json(reply);
  };





//delete shop
const deleteOne = (req,res) => {
  const db = req.app.get('db'),
      { shop_id } = req.params;
  db.deleteOne_shop( shop_id )
      .then(() => res.sendStatus(200))
      .catch(error => res.status(500).send(`DELETEoNE: ${error}`))
}


//create shop
const createOne = (req,res) => {
  const db = req.app.get('db')
  ,
  // console.log(req.body)
      {title, image_url, category, price, description, features } = req.body;

  db.createOne_shop(title, image_url, category, price, description, features)
      .then(response => res.status(200).send(response))
      .catch(error => res.status(500).send(`CREATEoNE: ${error}`))
}


//update shop
const updateOne = (req,res) => {
  console.log(req.body)
  const db = req.app.get('db'),
      { shop_id, title, image_url, category, price, description, features } = req.body;

  db.updateOne_shop( shop_id, title, image_url, category, price, description, features )
      .then(response => res.status(200).json(response))
      .catch(error => res.status(500).send(`UPDATEoNE: ${error}`))
}

// add to cart
function addToCart(req, res){
  console.log(req.body)
  const {product, price} = req.body
  // const {price} = req.body
  const db = req.app.get('db')

  // db.get_product(product).then(response => {
  //     let productObject = response;

      req.session.user.cart.push(product)
      req.session.user.total += +product.price;
      // console.log(req.session.user)
      res.status(200).json(req.session.user)

  // })
}

  module.exports = {
    getShop, deleteOne, createOne, updateOne, addToCart
  };
