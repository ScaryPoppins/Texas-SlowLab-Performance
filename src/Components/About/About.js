import React from 'react';
import './About.css';
// import GoogleMapReact from 'google-map-react';
import AboutMap from './AboutMap'
import candy from '../Images/candy.jpg'




function About() {
  return (
    <main className="About">

{/* API key
found on:
https://console.cloud.google.com/google/maps-apis/apis/maps-backend.googleapis.com/credentials?project=dev-mountain-personal-project&folder&organizationId&supportedpurview=project&duration=PT1H
documentation found on  */}

{/* https://www.npmjs.com/package/google-map-react */}

<h1>About Us</h1>
<div className='swaps-sentence'>
    <h2>Texas Speedlab Performance specializes in K20 Swaps for Mustangs, and F-150’s.</h2>
</div>

<h3>Contact</h3>
<h3>409-867-5309</h3>

<h2>180 South Ann Street <br/> Sour Lake, TX 77659 </h2>
<br/>


<AboutMap/>

<div className = 'about-us-sect'>
<h2>Our team</h2>

<img className = 'about-img'
    src={candy}
    alt='man with candy van'></img>

<h2>Bullwinkle Waters</h2>

</div>












    </main>
  );
}

export default About;
