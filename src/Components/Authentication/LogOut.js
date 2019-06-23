import React, {Component} from 'react';
import {connect} from 'react-redux'
import {getUser} from '../../ducks/reducer'

import axios from 'axios';

class LogOut extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.handleLogOut = this.handleLogOut.bind(this);
    }

    handleLogOut() {
        this.props.getUser()
        axios.post('/auth/user').then(response => console.log(response));
    }



    render() {
        return (
            // <div className="navHeader">
                <button 
                className='navButton'
                onClick={this.handleLogOut}

                >Log Out</button>
            // </div>
        )
    }
}

const mapStateToProps = state =>{
    // console.log(state);
    return{
        user: state.user
    }
}

export default connect(mapStateToProps, {getUser})(LogOut);