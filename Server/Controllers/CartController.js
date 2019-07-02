const express = require("express");
const app = express();

//delete from Cart

const deleteCartItem = (req,res) => {
    // const db = req.app.get('db'),
    //     { shop_id } = req.params;
    // // db.delete_cart_item( shop_id )


    //     .then(() => res.sendStatus(200))
    //     .catch(error => res.status(500).send(`deleteCartItem: ${error}`))

        
        console.log(req.params)
        console.log(req.query)

        let index = req.session.user.cart.findIndex(item => item.shop_id === +req.params.shop_id)
    
        req.session.user.total -= (+req.session.user.cart[index].price * +req.query.quantity)
        let newCart = req.session.user.cart.filter((e, i) => {
            return e.shop_id !== +req.params.shop_id
            console.log(e.shop_id)
        })

        req.session.user.cart = newCart
        // req.session.user.cart.splice(index, 1)
        console.log(req.session.user)
        res.status(200).json(req.session.user)
    }





  

  module.exports = {
    deleteCartItem
  };
