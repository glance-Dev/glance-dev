import React from "react";
import "./Home.css";
import ParticlesComponent from "../particales";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

function Home() {
  return (
    <>
      <div className="container">
        <section className="intro">
          <div class="box">
            <div class="lightbar"></div>
            <div class="topLayer"></div>
            <h2>
              Glance
              <FontAwesomeIcon icon={faEye} />
              DEV
            </h2>
          </div>
        </section>

        <section className="main" id="main">
          <div>
            <h2>
              Hello! Are You Afraid? <br />
              <span>Be at ease</span>
            </h2>
            <h3>Now let's review</h3>
            <a href="#web" className="main-btn">
              Let's move!
            </a>
          </div>
          <ParticlesComponent id="backgroundCanvas" />
        </section>

        <section className="web" id="web">
          <div>
            <h2>
              <span>Web Development</span>
            </h2>
            <h3>Now let's review.</h3>
            <a href="#projects" className="web-btn">
              review
            </a>
          </div>
        </section>

        <section className="mobile">
          <div>
            <h2>
              <span>Mobile Development</span>
            </h2>
            <h3>Now let's review.</h3>
            <a href="#projects" className="main-btn">
              review
            </a>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
