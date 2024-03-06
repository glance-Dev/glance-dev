import React from "react";
import "./About.css";
import teamData from "./teamData.json";
import ParticlesComponent from "../../particales";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import Contact from "../Contact/Contact";
// import Contact from "../AboutUs/Contact/Contact";

function About() {
  return (
    <>
 
 <ParticlesComponent id="backgroundCanvas" />
    <Contact/>
      <div className="cont-containar">
        {teamData.map((team) => {
          return (
            <div className="cont-card">
              <img src={team.imageLink} />
              <div>
                <h2>{team.name}</h2>
                <h3>{team.info}</h3>
                <p>{team.Phone}</p>
                <div class="social-icons">
                 
                  <a href={team.email}>
                    <FontAwesomeIcon icon={faSquareGithub} size="xl" />
                  </a>
                  
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default About;
