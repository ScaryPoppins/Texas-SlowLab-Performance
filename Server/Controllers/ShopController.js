const express = require("express");
const app = express();



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
      { id } = req.params;
  db.deleteOne_shop( id )
      .then(() => res.sendStatus(200))
      .catch(error => res.status(500).send(`DELETEoNE: ${error}`))
}


//create shop
const createOne = (req,res) => {
  const db = req.app.get('db'),
      {title, image_url, category, price, description, features } = req.body;

  db.createOne_shop(title, image_url, category, price, description, features)
      .then(response => res.status(200).send(response))
      .catch(error => res.status(500).send(`CREATEoNE: ${error}`))
}


//update shop
const updateOne = (req,res) => {
  const db = req.app.get('db'),
      { id, title, image_url, category, price, description, features } = req.body;

  db.updateOne_shop( id, title, image_url, category, price, description, features )
      .then(response => res.status(200).json(response))
      .catch(error => res.status(500).send(`UPDATEoNE: ${error}`))
}



  module.exports = {
    getShop, deleteOne, createOne, updateOne
  };
