const express = require("express");
const app = express();

//see orders
const getOrders = async (req, res) => {
    const reply = await req.app
      .get("db")
      .get_orders(req.session.user.id)
      .catch(error => {
        console.log(error);
        res.status(500).json("Server Error in getShop on ShopController");
      });
    res.status(200).json(reply);
  };

  module.exports = {
    getOrders
  };
