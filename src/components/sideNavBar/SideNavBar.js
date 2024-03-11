// SideNavBar.js
import React, { useState } from "react";
import "./SideNavBar.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SiKotlin } from "react-icons/si";
import { RiFlutterFill } from "react-icons/ri";
library.add(fab, fas, far);

const SideNavBar = () => {
  const [isExpanded, setExpandState] = useState(false);
  const menuItems = [
    { text: "Js", icon: <FontAwesomeIcon icon={['fab', 'js']} /> },
    { text: "react", icon: <FontAwesomeIcon icon={['fab', 'react']} /> },
    { text: "DB", icon: <FontAwesomeIcon icon={['fas', 'database']} /> },
    { text: "node.js", icon: <FontAwesomeIcon icon={['fab', 'node']} /> },
    { text: "swift", icon: <FontAwesomeIcon icon={['fab', 'swift']} /> },
    { text: "kotlin", icon: <SiKotlin /> },
    { text: "reactNative", icon: <FontAwesomeIcon icon={['fab', 'reacteurope']} /> },
    { text: "flutter", icon: <RiFlutterFill /> },
];
  

  return (
    <div
      className={
        isExpanded
          ? "side-nav-container"
          : "side-nav-container side-nav-container-NX"
      }
    >
      <div className="nav-upper">
        <div className="nav-heading">
          {isExpanded && (
            <div className="nav-brand">
              <img src="" alt="" />
              <h2>Glance-Dev</h2>
            </div>
          )}
          <button
            className={
              isExpanded ? "hamburger hamburger-in" : "hamburger hamburger-out"
            }
            onClick={() => setExpandState(!isExpanded)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div className="nav-menu">
          {menuItems.map(({ text, icon }, index) => (
            <a
              key={index}
              className={isExpanded ? "menu-item" : "menu-item menu-item-NX"}
              href="#"
            >
              <img className="menu-item-icon" src={icon} alt="" />
              {isExpanded && <p>{text}</p>}
            </a>
          ))}
        </div>
      </div>
      <div className="nav-footer">
        {isExpanded && (
          <div className="nav-details">
            <img className="nav-footer-avatar" src="" alt="" />
            <div className="nav-footer-info">
              <p className="nav-footer-user-name">Glance-Team</p>
              <p className="nav-footer-user-position"></p>
            </div>
          </div>
        )}
        <img className="logout-icon" src="" alt="" />
      </div>
    </div>
  );
};

export default SideNavBar;
