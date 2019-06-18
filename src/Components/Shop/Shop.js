import React, {Component} from 'react';
import ShopCard from './ShopCard'
import AddCardButton from './AddCardButton'
import axios from 'axios'
import './Shop.css';


class Shop extends Component{
    constructor(props){
        super(props)
        this.state = {
            products:[]
        }
    this.deleteOne = this.deleteOne.bind(this)
    }



    componentDidMount() {
        axios
        .get('/api/shop')
        .then(response => this.setState({ products: response.data }))
        .catch(error => console.log(`Dashboard-axiosGet: ${error}`))
    }

    deleteOne(id) {
        axios
            .delete(`/api/shop/${id}`)
            .then(() => this.componentDidMount())
            .catch(error => console.log(`Dashboard-axiosDelete: ${error}`))
    }
    



    render(){
        
        let { products } = this.state
        let displayProducts = products.map(slow_shop => {
        return(
            <div>
        <ShopCard 
        key={slow_shop.id}
        id={slow_shop.id}
        title={slow_shop.title}
        image= {slow_shop.image_url}
        description={slow_shop.description}
        features={slow_shop.features}
        category={slow_shop.category}
        reviews={slow_shop.reviews}
        price={slow_shop.price}
        deleteOneFn={this.deleteOne}
        />
        
        </div>
        )
        
        })
    
        return(
            <main>
                
            <div className='dashboard'>
                {products ? displayProducts : 'No products yet'}
                <AddCardButton />
            </div>
                
            </main>
        )
    }
}

export default Shop;