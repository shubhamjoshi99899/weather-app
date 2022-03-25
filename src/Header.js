import React from "react";

const Header = () => {
  return (
    <>
      <header>
        <section className="container main-hero-container">
          <div className="row">
            <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start ">
              <h1 className="display-2"  data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
                Weather at your <br /> Finger Tips.
              </h1>
              <p className="main-hero-para" data-aos="zoom-in-left">
                Many times, when we leave home, we find it a sunny day with a clear sky and suddenly, rain starts. So, it is not feasible for a human being to predict the weather. But, we can use a weather app to get a detailed weather report. A weather app will give a real-time and future weather report to alert us.
              </p>
              <button class="btns third">Subscribe</button>

            </div>
            {/*  --------------- main header right side--------------  */}
            <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-herosection-images"  data-aos="flip-left"
     data-aos-easing="zoom-in-up"
     data-aos-duration="4000">
              <img
                src="./images/hero1.jpg"
                alt="heroimg"
                className="img-fluid"
              />
              <img
                src="./images/hero4.jpg"
                alt="heroimg4"
                className="img-fluid main-hero-img2"
              />
            </div>
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;
