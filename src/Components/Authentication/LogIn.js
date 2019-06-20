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
            email: '',
            password: '',
            is_admin: '',
            redirect: false
        }
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.loginUser = this.loginUser.bind(this);
    }

    handleEmail(e) {
        this.setState({email: e.target.value})
    }
    handlePassword(e) {
        this.setState({password: e.target.value})
    }
    handleFirstName(e) {
        this.setState({first_name: e.target.value})
    }
    handleLastName(e) {
        this.setState({last_name: e.target.value})
    }





    loginUser() {
        axios.post('/auth/login', {email: this.state.email, password: this.state.password})
        .then((response) => this.setState({redirect: true}))
        .catch(error => console.log('Username / Password combination does not match'))
    }







 render() {
    const {classes} = this.props
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

export default withStyles(styles)(Login);