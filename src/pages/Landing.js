import React from 'react'
import './landing.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {Link} from 'react-router-dom'
AOS.init({
    duration:'2000'
});
function Landing() {
  return (
    <div>
        
        <div class="container">
            <h1 class="navbar-brand" data-aos='zoom-in' href="#">
            Welcome to Mern Weather App
            </h1>
            </div>  
        <div className="weather-card" data-aos='zoom-in' data-aos-duration="2500" >

<h2>Hyderabad</h2>
<h3>Cloudy<span>Wind 10km/h <span className="dot">•</span> Precip 0%</span></h3>
<h1>27°</h1>
<div className="sky">
    <div className="sun"></div>
    <div className="cloud">
        <div className="circle-small"></div>
        <div className="circle-tall"></div>
        <div className="circle-medium"></div>
    </div>
</div>
<table>
    <tr>
        <td>TUE</td>
        <td>WED</td>
        <td>THU</td>
        <td>FRI</td>
        <td>SAT</td>
    </tr>
    <tr>
        <td>30°</td>
        <td>34°</td>
        <td>36°</td>
        <td>34°</td>
        <td>37°</td>
    </tr>
    <tr>
        <td>17°</td>
        <td>22°</td>
        <td>19°</td>
        <td>23°</td>
        <td>19°</td>
    </tr>
</table>
</div>

            <div className="buttons" data-aos="fade-up" data-aos-duration="3000">
            
                <Link to="/home"><button className="btn cbtn btn-style  w-40 mt-5"  >
                     Continue to the Weather App
                    </button></Link>
                    </div>
    </div>
  )
}

export default Landing