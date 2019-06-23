import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {getUser, removeFromCart} from '../../ducks/reducer';
import './Cart.css'
import CartCard from './CartCard'

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }



    componentDidMount() {
        this.props.getUser()
        // this.props.removeFromCart()
    }





    render() {
        console.log(this.props.user)
        return (
            <main>
              <div className = 'cart-container'>


                <div className='cart-sub-header'>
                {/* pull user object and map over it */}
                My Cart
                </div>

                <div className = 'cart-sub-products'>
                    {/* {this.props.user
                    ?
                        this.props.user.cart
                        ?
                            this.props.user.cart.map((item, index) => {
                                return(
                                    <div key={index}>

                                    {item[0].title}
                                    <img src={item[0].image} />
                                    ${item[0].price}

                                    <button 
                                    // commented out // onClick={() => this.props.removeFromCart(this.props.id, this.props.price)}
                                    >
                                        Execute
                                    </button>

                                    </div>
                                )
                            })
                        :
                        //comment //Add items to cart
                            null
                    :
                       //comment //Please log in
                        null
                    } */}

{/* cart-card headings */}
                  <div className = 'cart-card-container'>
                      <div className = 'cart-card-product'>
                          Product
                      </div>
                      <div className = 'cart-card-quantity'>
                          Quantity
                      </div>
                      <div className = 'cart-card-price'>
                          Price
                      </div>
                      <div className = 'cart-card-delete'>
                      </div>
                  </div>


{/* cart-card itself */}


                    <CartCard/>
    
                </div>{/* cart-sub-products close */}


                <div className= 'cart-sub-footer'>

                     <div className= 'cart-total'>
                       <p>Total:</p>
                       <p>$182.99</p>
                    </div>  {/* cart-total close */}



                    <div className = 'cart-checkout'>
                      <Link to="/">
                        <button className= 'cart-checkout-button'
                        >
                          Checkout
                        </button>
                      </Link>
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