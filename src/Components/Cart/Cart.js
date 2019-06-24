import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {getUser} from '../../ducks/reducer';
import './Cart.css'
import CartCard from './CartCard'
import axios from 'axios'
import { array } from 'prop-types';



class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products:[],
            user: [],
            total: 0
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

        var distinct = (value, index, self) => {
            return self.indexOf(value) === index;
        }
        

        // const disctinctItems = products.filter(distinct)
        // const disctinctItems = [...new Set(products.map(x => x.id))]

        const distinctItems = Array.from(new Set(products.map(s => s.id)))
        .map(id => {
            return {
                id: id,
                title: products.find(s => s.id === id).title,
                price: products.find(s => s.id === id).price
        }
        })



        console.log(distinctItems)

        console.log(products)
        
        let displayItems =distinctItems.map(cartItem => {
            let count = 0
            for(let i=0;i<products.length;i++){
              if(products[i].id === cartItem.id){
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
        //fix QUANTITY... need to count how many of each item are there
        quantity={count}
        
        />
        
        </div>
        )
        
        })


        console.log(displayItems)

        console.log(products.quantity)
        console.log(products.price)
        console.log(this.state.products.quantity)
        console.log(this.state.products.price)

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
                      <Link to="/checkout">
                        <button className= 'cart-checkout-button'
                        >
                          CHECKOUT
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