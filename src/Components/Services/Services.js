import React, { Component } from "react";
import "./Services.css";
import axios from 'axios';
import ServicesCard from './ServicesCard.js';



class Services extends Component {
  constructor(props) {
    super(props);
    this.state = {
      servicesItems: [],
    };

   
  }

 

    // for get request
    componentDidMount() {
        const {servicesItems} = this.state
        axios
          .get("/api/services")
          .then(res => {
              console.log(res)
            this.setState({ servicesItems: res.data, loading: false });
          })
          .catch(error => {
            console.log(error);  
            this.setState({ loading: false, error: "An error occurred" });
          });
     
          console.log(servicesItems)
    }

      
      render() {
        const { servicesItems } = this.state;
        console.log(this.state.servicesItems)
          return(

        <main>

        <div className = 'services-container'>

        {servicesItems.map((item, index) => (
             <ServicesCard key={index} item={item} />))}

        </div>        

        </main>
    )
}
}

export default Services;