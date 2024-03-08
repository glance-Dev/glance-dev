import React from "react";
import "./Home.css";
import ParticlesComponent from "../particales.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faCodeMerge } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import GlanceNavbar from "../Navbar/GlanceNavbar.js";

function Home() {
  return (
    <>
      <div className="container-home">
        {/* <section className="">
          <div>
          
          </div>
        </section>
        <section className="intro">
          <div className="box">
            <div className="lightbar"></div>
            <div className="topLayer"></div>
            <h2>
              Glance
              <FontAwesomeIcon icon={faCodeMerge} />
              DEV
            </h2>
          </div>
        </section> */}
 
     
          <div className="container-ll">
          <section className="intro">
          <div className="box">
            <div className="lightbar"></div>
            <div className="topLayer"></div>
            <h2>
              Glance
              <FontAwesomeIcon icon={faCodeMerge} />
              DEV
            </h2>
          </div>
        </section>
      
      <h1 className="title-ll">Journey Through Code</h1>
      <p className="subtitle-ll">Embark on your programming adventure . Sharpen your skills today !</p>
      <Link to='/webTopics'><button class="cssbuttons-io">
  <span
    ><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0h24v24H0z" fill="none"></path>
      <path
        d="M24 12l-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414L24 12zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757 2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z"
        fill="currentColor"
      ></path>
    </svg>
    Let's Start </span>
</button></Link>
    </div>
          </div>
          <ParticlesComponent id="backgroundCanvas" />
        
      
    </>
  );
}

export default Home;
