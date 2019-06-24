import React, {Component} from 'react';
// import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './Home.css';
// import zIndex from '@material-ui/core/styles/zIndex';

class Home extends Component{
    constructor(){
        super()
        this.state = {

        }
    }



render(){
    return(
    <div className='home'>
    <div className='carosel-container'>


{/* https://www.npmjs.com/package/react-responsive-carousel             */}
            <Carousel 
            className='carosel' 
            autoPlay= {true}
            interval= {3000}
            infiniteLoop= {true}
            style = {{zIndex: '-1'}}
    
            >
                <div className = 'carosel-img-container'>
                    <img className = 'carosel-img'
                     alt = 'civic ricer car' 
                     src="https://mindovermotor.files.wordpress.com/2011/07/ricer_civic_2.jpg?w=392&h=294" 
                    />
                    <p className="legend">Civic dream car.   V4 power at it's finest.</p>
                </div>

                <div className = 'carosel-img-container'>
                    <img className = 'carosel-img' 
                    alt = 'truck' 
                    src="https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/43103816_2164699100435732_6069210842799276032_n.jpg?_nc_cat=111&_nc_oc=AQl-IHj6Uk16EslBRjCdUxwby8KjvMyj03a25ZHOeEqpLoWmG7rBnwslWwEMg7zaZWMGZzIAw_nNoO-4QGoM1xmo&_nc_ht=scontent-dfw5-1.xx&oh=0c6129699abf982e3177ac3243c52ba3&oe=5D825CC2" 
                    />
                    <p className="legend">K20 powered truck.   Hauls less, weighs less.  V4 Power!</p>
                </div>

                <div className = 'carosel-img-container'>
                    <img className = 'carosel-img' 
                    alt = 'v4 Mustang'
                    src="https://engineswapdepot.com/wp-content/uploads/2017/06/Foxbody-Mustang-with-a-Turbo-K20-K24-02.jpg" 
                    />
                    <p className="legend">K20 powered Foxbody Mustang.  V4 Power!</p>
                </div>

                <div className = 'carosel-img-container'>
                    <img className = 'carosel-img' 
                    alt = 'v6 Mustang'
                    src="https://static.carthrottle.com/workspace/uploads/comments/img_7908-5457655d7cc11.jpg" 
                    />
                    <p className="legend">V6 powered!!! As seen in Fast in Furious</p>
                </div>
            </Carousel>
    </div>

    <div className = 'home-truck'>


    </div>
    <div className = 'home-lambo'>


    </div>

    </div>
        );
    }
};



export default Home;