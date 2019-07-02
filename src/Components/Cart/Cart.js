import React, {Component} from 'react';
import {connect} from 'react-redux';
// import {Link} from 'react-router-dom';
import {getUser} from '../../ducks/reducer';
import './Cart.css'
import CartCard from './CartCard'
import axios from 'axios'
// import { array } from 'prop-types';

import StripeCheckout from "react-stripe-checkout"
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
// import { SlowBuffer } from 'buffer';

toast.configure();

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products:[],
            user: [],
            total: 0
        }
    }
const 


async placeOrder(bulkAddress){
//   let {total, cart, id} = this.props.reducer.cart;

//   console.log(this.props)
//           let customer_id = id;
//           console.log(customer_id)
//           let product_id = '{';
//           let quantity = '{';
//           let {address_line1, address_line2, address_city, address_state, address_zip} = bulkAddress
//           let city = address_city
//           let state = address_state
//           let zip = address_zip
//           let address = `${address_line1}`
//           if(address_line2 !== null){
//               address += ` ${address_line2}`
//           }
//           console.log(address, city, state, zip)
          
//           for(let i=0; i<cart.length; i++){
//               product_id += cart[i].product_id
//               quantity += cart[i].quantity
              

//               if(i<cart.length-1){
//                   product_id += ', '
//                   quantity += ', '
//               } else {
//                   product_id += '}'
//                   quantity += '}'
//               }
//           }
          
//           // console.log(product_id)
//           // console.log(quantity)

//           axios.post('/api/order', {product_id, customer_id, quantity, total, address, city, state, zip})
}

  handleToken = async(token, addresses) => {
      console.log(token)
      console.log(addresses)
        const {total, products} = this.state

        const response = await axios.post(
          '/api/checkout',
          { token, addresses, total, products}
        );
        const { status, address, cart } = response.data;
        console.log("Response:", response.data);
        if (status === "success") {
          toast("Success! Check email for details", { type: "success" });
          this.setState({products:cart})
          // console.log(address.charge.shipping.address)

          this.placeOrder(address.charge.source)

        } else {
          toast("Something went wrong", { type: "error" });
        }
      }


    componentDidMount() {
        axios.get('/auth/user').then(res => {
            console.log(res);
        this.setState({products: res.data.cart, total: res.data.total})    
        })
    }

    // getCart() {
    //     axios
    //     .get('/api/cart')
    //     .then(response => this.setState({ products: response.data }))
    //     .catch(error => console.log(`Dashboard-axiosGet: ${error}`))
    // }

    render() {
        console.log(this.props.user)
        console.log(this.state.products)


        let { products } = this.state
        console.log(products)

        var distinct = (value, index, self) => {
            return self.indexOf(value) === index;
        }

        const distinctItems = Array.from(new Set(products.map(s => s.shop_id)))
        .map(shop_id => {
            return {
              shop_id: shop_id,
                title: products.find(s => s.shop_id === shop_id).title,
                price: products.find(s => s.shop_id === shop_id).price
        }
        })

        
        let displayItems =distinctItems.map(cartItem => {
            let count = 0
            for(let i=0;i<products.length;i++){
              if(products[i].shop_id === cartItem.shop_id){
                count++
              }
            }
            // return e+' - quantity = '+count
        //   })

        
        return(
            <div>
        <CartCard 
        key={cartItem.id}
        id={cartItem.id}
        title={cartItem.title}
        image_url= {cartItem.image_url}
        price={cartItem.price}
        products={cartItem.products}
        user={cartItem.user}   
        quantity={count}
    
        />
        
        </div>
        )
        
        })


        // console.log(displayItems)  //good

        // console.log(products.quantity)
        // console.log(products.price)
        // console.log(this.state.products.quantity)
        // console.log(this.state.products.price)

        return (
            <main>
              <div className = 'cart-container'>


                <div className='cart-sub-header' id='cart-card-head'>

                {this.props.user.id > 0 ? `${this.props.user.first_name}'s Cart` : 'My Cart'}

                </div>

                <div className = 'cart-sub-products'>


{/* cart-card headings */}
                  <div className = 'cart-card-container'>
                      <div className = 'cart-card-product' id='cart-card-head'>
                          Product
                      </div>
                      <div className = 'cart-card-quantity' id='cart-card-head'>
                          Quantity
                      </div>
                      <div className = 'cart-card-price' id='cart-card-head'>
                          Price
                      </div>
                      <div className = 'cart-card-delete' id='cart-card-head'>
                      </div>
                  </div>


{/* cart-card itself */}


            <div className='cart-card-map'>
                {products ? displayItems : 'No products yet'}

            </div>
    
                </div>{/* cart-sub-products close */}


                <div className= 'cart-sub-footer'>

                     <div className= 'cart-total'>
                       <p>Total:    &nbsp;&nbsp;</p>
                       <p>${this.state.total}</p>
                    </div>  {/* cart-total close */}



                    <div className = 'cart-checkout'>
                      {/* <Link to="/checkout"> */}
                        {/* <button className= 'cart-checkout-button'
                        >
                          CHECKOUT
                        </button> */}
                      {/* </Link> */}

  

 {/* ---Stripe Checkout--- */}

                <StripeCheckout
                        stripeKey="pk_test_N28zSeEZWZAop3ldDO2V06KK00dbhX8RRs"
                        token={this.handleToken}
                        amount={this.state.total * 100}
                        name = {'slow_shop'}
                        // name = 'test title name'
                        billingAddress
                        shippingAddress
                        // products = {this.state.products.title}
                        // description={this.state.products.title}
        
                    />

























                    </div>{/* cart-checkout close */}

                </div>  {/* cart-sub-footer close */}



                    
              </div> {/* cart-container close */}
            </main>
        )
    }
}

const mapStateToProps = state => state;

export default connect(
    mapStateToProps,
    {getUser
      // ,removeFromCart
    }
) (Cart);