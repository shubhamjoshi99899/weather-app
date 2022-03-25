import React, {useState} from 'react'
import './places.css';
import placesapi from './API/placesApi';
import {Link} from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  duration:'2000'
});


                    const Places = (props) => {
                                 
                const[placesData, setPlaceData] =useState(placesapi);
                console.log(placesData);
                        return (

                            <div>
                                <div className="heading">
                    <h1 className="main-heading text-center fw-bold mt-5"  data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
            Live Weather of Famous Cities
          </h1>
                    </div>
                            
                                <div class="container places-container"  data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
                                
                    <div class="row">
                   { 
                       placesData.map((curElem) => {
                    const {image, title, info,to,name,p1,p2,p3,p4} = curElem;
                    return(
                        <>
                    
                    <div class="col-lg-4 m-auto main">
                    <div className="card">
                    <div class="places">
    <div class="tile"> 
        <img src={image}/>
        <div class="text">
        <h1>{title}</h1>
        <h2 class="animate-text">{info}</h2>
        <p class="animate-text">
            <ul>
               <li>{p1}</li>
               <li>{p2}</li>
               <li>{p3}</li>
               <li>{p4}</li> 
            </ul>

        </p>
        <div class="frame">
        <Link to ={to}> <div class="frame">
              <button class="custom-btn btn-3"><span>{name}</span></button>
              </div> </Link>
            </div>
        </div>
        </div>
       </div>
                    </div>
                    </div>
                    </>
                    )
                    })
                   }
                    </div>
                    </div> 
                  
                    </div>
                        )
                    }
export default Places
