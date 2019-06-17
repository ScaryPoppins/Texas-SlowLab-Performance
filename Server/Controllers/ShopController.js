const express = require("express");
const app = express();


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


const deleteOne = (req,res) => {
  const db = req.app.get('db'),
      { id } = req.params;

  db.deleteOne_shop( id )
      .then(() => res.sendStatus(200))
      .catch(error => res.status(500).send(`DELETEoNE: ${error}`))
}

const createOne = (req,res) => {
  const db = req.app.get('db'),
      {title, image_url, description, features, category, tags, price } = req.body;

  db.createOne_shop(title, image_url, description, features, category, tags, price)
      .then(response => res.status(200).send(response))
      .catch(error => res.status(500).send(`CREATEoNE: ${error}`))
}


  module.exports = {
    getShop, deleteOne, createOne
  };
