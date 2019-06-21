import React, {Component} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link, Redirect} from "react-router-dom";
import axios from 'axios';
import {connect} from 'react-redux'
import {getUser} from '../../ducks/reducer'

// So stylish
const styles = makeStyles(theme => ({
    '@global': {
      body: {
        backgroundColor: theme.palette.common.white,
      },
    },
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2, 1),
    },
  }));
  





class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            is_admin: '',
            user: [],
            redirect: false
            
        }
        // this.handleFirstName = this.handleFirstName.bind(this);
        // this.handleLastName = this.handleLastName.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        // this.handleAdmin = this.handleAdmin.bind(this);
        this.loginUser = this.loginUser.bind(this);
        this.updateUser = this.updateUser.bind(this)

    }


    componentDidMount(){
      // setTimeout(() => {
        this.props.getUser()
        this.updateUser()
      // },2000)
    }
  //   handleFirstName(e) {
  //       this.setState({first_name: this.props.first_name})
  //  }
  //   handleLastName(e) {
  //       this.setState({last_name: this.props.last_name})
  //  }
    handleEmail(e) {
        this.setState({email: e.target.value})
    }
    handlePassword(e) {
        this.setState({password: e.target.value})
    }
    // handleAdmin(e) {
    //     this.setState({is_admin: this.props.is_admin})
    // }
    updateUser(user){
      this.setState({user:user})
    }  


    
  
  



    // loginUser() {
    //     axios.post('/auth/login', {email: this.state.email, password: this.state.password})
    //     .then((response) => this.setState({redirect: true}))
    //     .catch(error => console.log('Username / Password combination does not match'))
    // }

    loginUser(e){
      e.preventDefault()
      let {email, password} = this.state;
      axios.post('/auth/login', {email, password})
          .then(user=>{
              console.log(email, password)
              // this.props.setEmail(user.data.email);
              this.props.getUser(user.data)
              this.setState({email: '', password: '', redirect: true});
              // console.log(user.data)
              // this.props.getUser(user.data)
              console.log(user.data)
              // this.updateUser(user.data);
              console.log('Logged in');
          })
          .catch((err)=>{
              this.setState({email: '', password: ''});
              console.log(err, 'Login failed in Login component');
          })
          // this.props.getUser()
          // this.updateUser(user.data)
          
  }


  renderRedirect = () => {
    if(this.state.redirect === true ){
      return <Redirect to='/' />
    }
  }



 render() {
    const {classes} = this.props

    // let {username, password, first_name, last_name, email, phone_number} = this.state;
    // console.log(this.state.user)
    // console.log(this.state.user.admin)
    // let {user} = this.props;
    
    console.log('local')
    console.log(this.state.user)
    console.log('redux')
    console.log(this.props.user)

  return (

    <div>
        {this.renderRedirect()}
        <div style={{ height: '7vh'}}></div>

    <Container component="main" maxWidth="xs"
    style={{ backgroundColor: '#f9f9f9',
    borderRadius: '20px'}}>
      <CssBaseline />
      <div className={classes.paper}
      style={{ paddingTop: '3vh'}}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>

        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            style={{ backgroundColor: 'white'}}
            onChange={this.handleEmail}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            style={{ backgroundColor: 'white'}}
            onChange={this.handlePassword}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            style={{ marginBottom: '1vh'}}
            onClick={(e) => this.loginUser(e)}
          >
            Sign In
          </Button>

          <Grid container>
            <Grid item xs>
              <Link to="/contact" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link to="/register" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>

        </form>
      </div>
    </Container>
    <div style={{ height: '7vh'}}></div>
    </div>
  );
}
}


Login.propTypes = {
    classes: PropTypes.object.isRequired,
  }


  const mapStateToProps = state =>{
    console.log(state);
    return{
        user: state.user
    }
}



export default (withStyles(styles)(connect(mapStateToProps, {getUser})(Login)))