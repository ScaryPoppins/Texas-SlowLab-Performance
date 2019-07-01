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
                    alt = 'lightweight racing seat'
                    src="http://boredomtherapy.com/wp-content/uploads/2016/05/13-horrible-car-repairs.jpg" 
                    />
                    <p className="legend">Now offering Lightweight seat modifications</p>
                </div>

                <div className = 'carosel-img-container'>
                    <img className = 'carosel-img'
                     alt = 'wooden roll cage' 
                     src="https://postmediadriving.files.wordpress.com/2019/02/wood-mods-02-wooden-prius.jpg?w=800&crop=1&strip=all&quality=100" 
                    />
                    <p className="legend">Bumper replacement services.</p>
                </div>
                
                <div className = 'carosel-img-container'>
                    <img className = 'carosel-img' 
                    alt = 'truck' 
                    src="https://api.pddataservices.com/images?url=https://postmediadriving.files.wordpress.com/2019/02/wood-mods-01-plywood-lexus-gs-2.jpg&w=960&h=480" 
                    />
                    <p className="legend">custom stereo systems!</p>
                </div>

                <div className = 'carosel-img-container'>
                    <img className = 'carosel-img' 
                    alt = 'supercharger'
                    src="https://i.kym-cdn.com/photos/images/original/000/969/008/df7.jpg" 
                    />
                    <p className="legend">Supercharger appearance hood ornaments</p>
                </div>



                <div className = 'carosel-img-container'>
                    <img className = 'carosel-img' 
                    alt = 'custom body kit'
                    src="https://mgb1967.com/wp-content/uploads/2018/05/Plywood-ground-effects-on-rust-bucket.jpg" 
                    />
                    <p className="legend">custom body kits</p>
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