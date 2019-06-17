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
  







  module.exports = {
    getShop
  };
  

  