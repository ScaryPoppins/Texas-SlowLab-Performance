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
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import axios from 'axios';




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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));




class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            receive_promotions: '',
            is_admin: '',
            redirect: false
        }
        this.handleFirstName = this.handleFirstName.bind(this);
        this.handleLastName = this.handleLastName.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
    }


    handleFirstName(e) {
        this.setState({first_name: e.target.value})
    }
    handleLastName(e) {
        this.setState({last_name: e.target.value})
    }
    handleEmail(e) {
        this.setState({email: e.target.value})
    }
    handlePassword(e) {
        this.setState({password: e.target.value})
    }



    registerUser() {
        axios.post('/auth/register', {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email, 
            password: this.state.password
        })
        .then((response) => this.setState({redirect: true}))
        .catch(error => console.log('Username / Password combination does not match'))
    }



render(){
  const classes = this.props
  return (

    <div>
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
        <Typography component="h1" variant="h5"
        style={{ marginBottom: '1vh'}}>
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
            
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                style={{ backgroundColor: 'white'}}
                onChange={this.handleFirstName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                style={{ backgroundColor: 'white'}}
                onChange={this.handleLastName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                style={{ backgroundColor: 'white'}}
                onChange={this.handleEmail}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
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
              
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            style={{ marginBottom: '1vh',
                     marginTop: '1vh'}}
            onClick={this.registerUser}
          >
            Sign Up
          </Button>

          <Grid container justify="flex-end">
            <Grid item>
              <Link to="/logIn" variant="body2">
                Already have an account? Sign in
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
Register.propTypes = {
    classes: PropTypes.object.isRequired,
  }

export default withStyles(styles)(Register);