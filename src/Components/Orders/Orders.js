
import React, {Component} from 'react';
import {connect} from 'react-redux';
// import {Link} from 'react-router-dom';
import {getUser} from '../../ducks/reducer';
import '../Cart/Cart.css'
import OrdersCard from './OrdersCard'
import axios from 'axios'
// import { array } from 'prop-types';




class Orders extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // products:[],
            user: [],
            total: 0,
            orders: []
        }
        this.getOrders = this.getOrders.bind(this)
    }

    componentDidMount() {
        this.getOrders()
    }

    getOrders() {
        axios
        .get('/api/orders')
        .then(response => {
            // console.log(response.data)
            this.setState({ orders: response.data })   
            console.log(this.state.orders) 
        }
        
        )
        .catch(error => console.log(`Dashboard-axiosGet: ${error}`))

    }



const 


render() {
 
    console.log(this.state.orders)
    console.log(this.state.orders.first_name)



    let { orders } = this.state
    console.log(orders)


    const distinctOrders = Array.from(new Set(orders.map(o => o.orders_id)))
    .map(orders_id => {
        return {
          orders_id: orders_id,
            items_ordered: orders.find(o => o.orders_id === orders_id).items_ordered,
            total: orders.find(o => o.orders_id === orders_id).total
    }
    })

    
    let displayOrders =distinctOrders.map(ordersItem => {
        let count = 0
        for(let i=0;i<orders.length;i++){
          if(orders[i].orders_id === ordersItem.orders_id){
            count++
          }
        }
        // return e+' - quantity = '+count
    //   })

    
    return(
        <div>
    <OrdersCard 
    key={ordersItem.orders_id}
    orders_id={ordersItem.orders_id}
    items_ordered={ordersItem.items_ordered}
    total={ordersItem.total}
    orders={ordersItem.orders} 
    quantity={count}
    first_name={ordersItem.first_name} 

    />
    
    </div>
    )
    
    })



    return (
        <main>
          <div className = 'cart-container'>


            <div className='cart-sub-header' id='cart-card-head'>
            {/* pull user object and map over it */}
            {this.state.orders.length > 0 ? `${this.state.orders[0].first_name}'s orders` : 'My Orders'}
            </div>

            <div className = 'cart-sub-products'>


{/* cart-card headings */}
              <div className = 'cart-card-container'>
                  <div className = 'cart-card-product' id='cart-card-head'>
                      Products Ordered
                  </div>
                  <div className = 'cart-card-quantity' id='cart-card-head'>
                      {/* Quantity */}
                  </div>
                  <div className = 'cart-card-price' id='cart-card-head'>
                      Total Price
                  </div>
                  <div className = 'cart-card-delete' id='cart-card-head'>
                  </div>
              </div>


{/* cart-card itself */}


        <div className='cart-card-map'>
            {orders ? displayOrders : 'No products yet'}

        </div>

            </div>{/* cart-sub-products close */}


            <div className= 'cart-sub-footer'>
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
) (Orders);