import React, {Component} from 'react';
import ShopCard from './ShopCard'
import axios from 'axios'

class Shop extends Component{
    constructor(props){
        super(props)
        this.state = {
            products:[]
        }
    }


    componentDidMount() {
        axios
        .get('/api/shop')
        .then(response => this.setState({ products: response.data }))
        .catch(error => console.log(`Dashboard-axiosGet: ${error}`))
    }



    render(){
        
        let { products } = this.state
        let displayProducts = products.map(slow_shop => {
        return(
        <ShopCard 
        key={slow_shop.id}
        id={slow_shop.id}
        name={slow_shop.title}
        image={slow_shop.image_url}
        description={slow_shop.description}
        features={slow_shop.features}
        category={slow_shop.category}
        tags={slow_shop.tags}
        reviews={slow_shop.reviews}
        />
    
        )
        })
        console.log(displayProducts)
        return(
            <main>
                
            <div className='Dashboard'>
                shop test
                {products ? displayProducts : 'No products yet'}
            </div>
                <ShopCard/>
            </main>
        )
    }
}

export default Shop;