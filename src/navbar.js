import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <section className="navbar-bg">
        <nav class="navbar navbar-expand-lg navbar-light" data-aos="fade-down">
          <div class="container" data-aos="fade-down-right">
            <NavLink class="navbar-brand" to="/home">
            Weather App
            </NavLink>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setShow(!show)}>
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class={`collapse navbar-collapse ${show ? "show" : ""}`}>
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <NavLink class="nav-link active" aria-current="page" to="/">
                    Home
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink class="nav-link active" to="/places">
                    Cities
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink class="nav-link active" to="/services">
                    Services
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink class="nav-link active animate__animated  animate__flash animate__infinite	infinite" style={{color:'red', fontWeight:'900'}} to="/weather">
                    
                  Live Weather
                  </NavLink>
                </li>
              </ul>
             
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
