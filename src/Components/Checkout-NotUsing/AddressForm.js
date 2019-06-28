import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';



class AddressForm extends Component {
  constructor(props) {
      super(props);
      this.state = {
          firstName: '',
          lastName: '',
          address1: '',
          address2: '',
          city: '',
          state: '',
          zip: '',
          country: '', 
          saveAddress: false,
          shippingInfo: []
          }

          this.handleFirstName = this.handleFirstName.bind(this);
          this.handleLastName = this.handleLastName.bind(this);
          this.handleAddress1 = this.handleAddress1.bind(this);
          this.handleAddress2 = this.handleAddress2.bind(this);
          this.handleCity = this.handleCity.bind(this);
          this.handleState = this.handleState.bind(this);
          this.handleZip = this.handleZip.bind(this);
          this.handleCountry = this.handleCountry.bind(this);
          this.handleSaveAddress = this.handleSaveAddress.bind(this);

  }

    handleFirstName(e){
      this.setState({firstName: e.target.value})
    }
    handleLastName(e){
      this.setState({lastName: e.target.value})
    }
    handleAddress1(e){
      this.setState({address1: e.target.value})
    }
    handleAddress2(e){
      this.setState({address2: e.target.value})
    }
    handleCity(e){
      this.setState({city: e.target.value})
    }
    handleState(e){
      this.setState({state: e.target.value})
    }
    handleZip(e){
      this.setState({zip: e.target.value})
    }
    handleCountry(e){
      this.setState({country: e.target.value})
    }
    handleSaveAddress(e){
      this.setState({saveAddress: e.target.value})
    }



render() {
console.log(this.state)
  return (

    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="fname"
            onChange={this.handleFirstName}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="lname"
            onChange={this.handleLastName}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="billing address-line1"
            onChange={this.handleAddress1}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="billing address-line2"
            onChange={this.handleAddress2}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="billing address-level2"
            onChange={this.handleCity}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="state" name="state" label="State/Province/Region" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="billing postal-code"
            onChange={this.handleZip}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="billing country"
            onChange={this.handleCountry}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value={true} />}
            label="Use this address for payment details"
            onClick = {(e) => console.log(e.target.value)}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  
  );
 }
}

export default AddressForm