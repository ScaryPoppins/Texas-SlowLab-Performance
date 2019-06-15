import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './Components/Home/Home'
import Services from './Components/Services/Services'
import Shop from './Components/Shop/Shop'
import Testimonials from './Components/Testimonials/Testimonials'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'


export default (
    <Switch>
        <Route exact path = '/' component={Home}/>
        <Route path = '/services' component={Services}/>
        <Route path = '/shop' component={Shop}/>
        <Route path = '/testimonials' component={Testimonials}/>
        <Route path = '/about' component={About}/>
        <Route path = '/contact' component={Contact}/>
    </Switch>
)