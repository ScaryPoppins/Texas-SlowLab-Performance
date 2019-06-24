import React, {Component} from 'react';
import './Header.css';
import { Link } from "react-router-dom";
import LogOut from '../Authentication/LogOut'
// import Cart from '../Cart/Cart'
// import RenderToLayer from 'material-ui/internal/RenderToLayer';
import {connect} from 'react-redux'
import {getUser} from '../../ducks/reducer'

class Header extends Component {
  constructor() {
        super();
        this.state = {
                user: [],
                loggedIn: false,
                menuStatus: 'dropdown-menu-close'
                
        }
  }

  handleClick = () => {
        if(this.state.menuStatus === 'dropdown-menu-open'){
                this.setState({menuStatus: 'dropdown-menu-close'})
        }
        else {
                this.setState({menuStatus: 'dropdown-menu-open'})
        }
        }


  componentDidMount(){
        this.props.getUser()
//         // Axios.get('/auth/user')
//                 // .then(response =>
//                 //          this.setState({user:response.data}))
//                 // // .then(response =>   
//                 // //         this.setState(this.state.loggedIn = true))
//                 // .catch((error) => console.log(error `in Header componentDidMount`))
  }





render(){          



console.log(this.props);
  return (
   <div>    

  <div className="navHeader-over700">
        
    <img id = 'snail-over700' alt = 'snail' src='https://image.flaticon.com/icons/svg/87/87989.svg'/> 

    <div className = 'button-container-over700'>  
    <Link to="/">
            <button className='navButton'>Home</button>
    </Link>

    <Link to="/services">
            <button className='navButton'>Services</button>
    </Link>

    <Link to="/shop">
            <button className='navButton'>Shop</button>
    </Link>

    <Link to="/testimonials">
            <button className='navButton'>Testimonials</button>
    </Link>

    <Link to="/about">
            <button className='navButton'>About Us</button>
    </Link>

    <Link to="/contact">
            <button className='navButton'>Contact Us</button>
    </Link>

        
    { this.props.user && this.props.user.email   
     ?    
       <LogOut/>
     :
       <Link to="/login">
         <button className='navButton'>Log In</button>
       </Link>
    }

    <Link to="/cart">
            <button className='navButton'>
            {/* <img src="https://cdn.onlinewebfonts.com/svg/img_19666.png" alt="cart"/> */}
            Cart
            </button>
    </Link>

    {/*button-container close */}
    </div>   
    {/*button-container close */}



    </div>  
{/* ---------OVER 700 MENU--------- */}
 {/* ---------------------------------------------- */}
{/* ---------UNDER 700 MENU--------- */}

<div className="navHeader-under700">
        <button 
            onClick = {this.handleClick}
            className = 'menu-button'>

            <img id='hamburger-menu' alt='menu'
                src="http://chesleytravel.com/images/icons/menu.png"></img>
        </button>



        <div className={this.state.menuStatus} >
        <Link to="/">
            <button className='navButton' id= 'under700-text'>Home</button>
    </Link>

    <Link to="/services">
            <button className='navButton' id= 'under700-text'>Services</button>
    </Link>

    <Link to="/shop">
            <button className='navButton' id= 'under700-text'>Shop</button>
    </Link>

    <Link to="/testimonials">
            <button className='navButton' id= 'under700-text'>Testimonials</button>
    </Link>

    <Link to="/about">
            <button className='navButton' id= 'under700-text'>About Us</button>
    </Link>

    <Link to="/contact">
            <button className='navButton' id= 'under700-text'>Contact Us</button>
    </Link>

        
    { this.props.user && this.props.user.email   
     ?    
       <LogOut  id= 'under700-text'/>
     :
       <Link to="/login">
         <button className='navButton' id= 'under700-text'>Log In</button>
       </Link>
    }

    <Link to="/cart">
            <button className='navButton'  id= 'under700-text'>
            {/* <img src="https://cdn.onlinewebfonts.com/svg/img_19666.png" alt="cart"/> */}
            Cart
            </button>
    </Link>
        </div>











    <div>
        <img id = 'snail-under700' alt = 'snail' src='https://image.flaticon.com/icons/svg/87/87989.svg'/> 
    </div>

</div>
</div>   
  );
}
}
const mapStateToProps = state =>{
        // console.log(state);
        return{
            user: state.user
        }
    }
    
    export default connect(mapStateToProps, {getUser})(Header);


// import React from 'react';
// import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
// import Typography from '@material-ui/core/Typography';
// import { Link } from "react-router-dom";
// import LogOut from '../Authentication/LogOut'
// import {getUser} from '../../ducks/reducer'



// class Header extends Component {
//         constructor() {
//                 super();
//                 this.state = {
//                     user: {},
//                     loggedIn: false
                    
//                 }
//         }











// function TabContainer(props) {
//   return (
//     <Typography component="div" style={{ padding: 8 * 3 }}>
//       {props.children}
//     </Typography>
//   );
// }

// TabContainer.propTypes = {
//   children: PropTypes.node.isRequired,
// };

// function LinkTab(props) {
//   return (
//     <Tab
//       component="a"
//       onClick={event => {
//         event.preventDefault();
//       }}
//       {...props}
//     />
//   );
// }

// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1,
//     backgroundColor: theme.palette.background.paper,
//   },
// }));


// componentDidMount(){
//         this.props.getUser()
// };



// export default function NavTabs() {
//   const classes = useStyles();
//   const [value, setValue] = React.useState(0);

//   function handleChange(event, newValue) {
//     setValue(newValue);
//   }

//   return (
//     <div className={classes.root}>
//       <AppBar position="static">
//         <Tabs variant="fullWidth" value={value} onChange={handleChange}>

//           <Tab label='Home'  to='/' component={Link} />
//           <Tab label='Services'  to='/services' component={Link} />
//           <Tab label='Shop'  to='/shop' component={Link} />
//           <Tab label='Testimonials'  to='/testimonials' component={Link} />
//           <Tab label='About Us'  to='/about' component={Link} />
//           <Tab label='Contact'  to='/contact' component={Link} />




//           { this.props.user && this.props.user.email   
//         ?    
//         <LogOut/>
//         :
//         <Link to="/login">
//           <button className='navButton'>Log In</button>
//         </Link>
//      }


//           <Tab label='Log'  to='/' component={Link} />




//           <Tab label='Cart'  to='/cart' component={Link} />
  
//         </Tabs>
//       </AppBar>

//     </div>
//   );
// }