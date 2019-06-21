import React, {Component} from 'react';
import './Header.css';
import { Link } from "react-router-dom";
import LogOut from '../Authentication/LogOut'
import RenderToLayer from 'material-ui/internal/RenderToLayer';
import {connect} from 'react-redux'
import {getUser} from '../../ducks/reducer'

class Header extends Component {
        constructor() {
                super();
                this.state = {
                    user: {},
                    loggedIn: false
                    
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



// console.log(this.props);
  return (
    <div className="navHeader">
        
    <img id = 'snail' alt = 'snail' src='https://image.flaticon.com/icons/svg/87/87989.svg'/>         

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

{ this.props.user &&  this.props.user.email   ?    
<LogOut/>        

:

<Link to="/login">
<button className='navButton'>Log In</button>
</Link>

}
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
//           <LinkTab label="Page One" href="/" />
//           <LinkTab label="Page Two" href="/services" />
//           <LinkTab label="Page Three" href="/shop" />
//         </Tabs>
//       </AppBar>
//       {value === 0 && <TabContainer>Home</TabContainer>}
//       {value === 1 && <TabContainer>Services</TabContainer>}
//       {value === 2 && <TabContainer>Shop</TabContainer>}
//     </div>
//   );
// }