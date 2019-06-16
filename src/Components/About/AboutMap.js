import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import './About.css';
 
// const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
// class AboutMap extends Component {
//   static defaultProps = {
//     center: {
//       lat: 32.777505,
//       lng: -96.795663
//     },
//     zoom: 15
//   };
 
//   render() {
//     return (
//       // Important! Always set the container height explicitly
//       <div style={{ height: '50vh', width: '50vw', marginLeft: '25vw'}}>
//         <GoogleMapReact
//           bootstrapURLKeys={{ key: 'AIzaSyDq5-dDa5x2mnqinkcXXPuf_9GCBAsfTSA' }}
//           defaultCenter={this.props.center}
//           defaultZoom={this.props.zoom}
//           onChildMouseEnter={this.props.onChildMouseEnter}
//           onChildMouseLeave={this.props.onChildMouseLeave}
//         >
//           <AnyReactComponent
//             lat={32.777505}
//             lng={-96.795663}
//             icon ='http://pngimg.com/uploads/snails/snails_PNG13216.png'
//             text="DevMounain"
//           />


          
//         </GoogleMapReact>
//       </div>
//     );
//   }
// }
 
// export default AboutMap;
//------------------------------------------------------------------------------------------------------






//documentation is here:  https://github.com/fullstackreact/google-maps-react

export class AboutMap extends Component {
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

        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />

        <InfoWindow onClose={this.onInfoWindowClose}>
            <div> 
              {/* <h1>{this.state.selectedPlace.name}</h1> */}
            </div>
        </InfoWindow>
      </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDq5-dDa5x2mnqinkcXXPuf_9GCBAsfTSA'
})(AboutMap)