import React from 'react';
import './About.css';
import GoogleMapReact from 'google-map-react';
import AboutMap from './AboutMap'
import candy from '../Images/candy.jpg'




function About() {
  return (
    <main className="About">

{/* API key: AIzaSyDq5-dDa5x2mnqinkcXXPuf_9GCBAsfTSA
found on:
https://console.cloud.google.com/google/maps-apis/apis/maps-backend.googleapis.com/credentials?project=dev-mountain-personal-project&folder&organizationId&supportedpurview=project&duration=PT1H
documentation found on  */}

{/* https://www.npmjs.com/package/google-map-react */}

<h1>About Us</h1>
<div className='swaps-sentence'>
    <h3>Texas Speedlab Performance specializes in &nbsp;</h3>
     <h1>K20</h1> 
     <h3 > &nbsp; Swaps for Mustangs, and F-150’s.</h3>
</div>

<p>Contact</p>
<p>409-867-5309</p>

<h2>180 South Ann Street <br/> Sour Lake, TX 77659 </h2>



<AboutMap/>

<div className = 'about-us-sect'>
<h2>Our team</h2>

<img className = 'about-img'
    src={candy}></img>

<h2>Bullwinkle Waters</h2>

</div>












    </main>
  );
}

export default About;
