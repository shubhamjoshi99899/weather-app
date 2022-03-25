import React, { useState } from "react";
import serviceapi from "./API/serviceApi.js";
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  duration:'2000'
});
const Services = () => {
  const [serviceData, setServiceData] = useState(serviceapi);
  return (
    <>
      <section className="service-main-container ">
        <div className="container service-container" data-aos="zoom-in-up">
        <div className="heading">
                    <h1 className="main-heading text-center fw-bold mt-5" data-aos="fade-down">
            Services we Offer
          </h1>
                    </div>
          <div className="row">
            {serviceData.map((curElem) => {
              const { id, logo, title, info, image } = curElem;
              return (
                <>
                
                  <div
                    className="col-11 col-lg-4 col-xxl-4 work-container-subdiv" data-aos="fade-up"
                    key={id}>

                      <img src={image}/>
                      <h1>{}</h1>
                    <i className={`fontawesome-style ${logo}`}></i>
                    <h2 className="sub-heading">{title}</h2>
                    <p className="main-hero-para">{info}</p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
