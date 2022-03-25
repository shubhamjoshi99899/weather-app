import React, { useState } from "react";
import workapi from "./API/workApi.js";

const HowItWorks = () => {
  const [workData, setWorkData] = useState(workapi);
  console.log(workData);
  return (
    <>
      <section>
        <div className="work-container container" data-aos="zoom-in-up">
          <h1 className="main-heading text-center">How does it Work</h1>
          <div className="row">
            {workData.map((curElem) => {
              const { id, logo, title, info } = curElem;
              return (
                <>
                  <div className="col-12 col-lg-4 text-center work-container-subdiv" data-aos="fade-right">
                    <i class={`fontawesome-style ${logo}`}></i>
                    <h2 data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" className="sub-heading">{title}</h2>
                    <p data-aos="fade-up" data-aos-anchor-placement="top-bottom" className="main-hero-para w-100">{info}</p>
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

export default HowItWorks;
