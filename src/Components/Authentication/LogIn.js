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

        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.loginUser = this.loginUser.bind(this);
        this.updateUser = this.updateUser.bind(this)

    }

    componentDidMount(){
        this.props.getUser()
        this.updateUser()
    }

    handleEmail(e) {
        this.setState({email: e.target.value})
    }
    handlePassword(e) {
        this.setState({password: e.target.value})
    }
    updateUser(user){
      this.setState({user:user})
    }  

    loginUser(e){
      e.preventDefault()
      let {email, password} = this.state;
      axios.post('/auth/login', {email, password})
          .then(user=>{
              this.props.getUser(user.data)
              this.setState({email: '', password: '', redirect: true});
          })
          .catch((err)=>{
              this.setState({email: '', password: ''});
              console.log(err, 'Login failed in Login component');
          })
  }


  renderRedirect = () => {
    if(this.state.redirect === true ){
      return <Redirect to='/' />
    }
  }



 render() {
    const {classes} = this.props

    
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
    // console.log(state);
    return{
        user: state.user
    }
}



export default (withStyles(styles)(connect(mapStateToProps, {getUser})(Login)))