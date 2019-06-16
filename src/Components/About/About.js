import React from 'react';
import './About.css';
import GoogleMapReact from 'google-map-react';
import AboutMap from './AboutMap'




function About() {
  return (
    <main className="About">

{/* API key: AIzaSyDq5-dDa5x2mnqinkcXXPuf_9GCBAsfTSA
found on:
https://console.cloud.google.com/google/maps-apis/apis/maps-backend.googleapis.com/credentials?project=dev-mountain-personal-project&folder&organizationId&supportedpurview=project&duration=PT1H
documentation found on  */}

{/* https://www.npmjs.com/package/google-map-react */}

About

<AboutMap/>







About2










    </main>
  );
}

export default About;
