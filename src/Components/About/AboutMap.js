import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import './About.css';
 



//documentation is here:  https://github.com/fullstackreact/google-maps-react

export class AboutMap extends Component {


    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {
            name: 'Slow Performance',
            logo: 'http://pngimg.com/uploads/snails/snails_PNG13216.png'
        },
      };


    //   onMarkerClick = (props, marker, e) =>
    //   this.setState({
    //     selectedPlace: props,
    //     activeMarker: marker,
    //     showingInfoWindow: true
    //   });
  


  render() {
      const style = {width: '35vw', height: '40vh'}
    return (
        <div className= 'mapz'>
      <Map 
      google={this.props.google} 
      style={style}
      zoom={15}
      initialCenter={{
      lat: 32.777505,
      lng: -96.795663
    }}
      >
        {/* <Marker onClick={this.onMarkerClick}
                name={'Current location'} /> */}

        <Marker 
                onMouseover={this.onMouseover}
                name={'Dev Mountain'} 
                />

        <InfoWindow
                onOpen={this.windowHasOpened}
                onClose={this.windowHasClosed}
                visible={this.state.showingInfoWindow}>
             <div>
                 <h1>{this.state.selectedPlace.name}</h1>
             </div>
        </InfoWindow>

      </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY
})(AboutMap)