import React, { useEffect, useState } from 'react';
import './NavigationMenu.css';
import data from '../topics.json';
import SideNavBar from '../sideNavBar/SideNavBar';
import ParticlesComponent from '../particales';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

function NavigationMenu() {
  const { name } = useParams();
  console.log(name);

  // const sendData = (id) => {
  //   return [user.sub, id]
  // }
  const { isAuthenticated, loginWithRedirect, logout, user, loginWithPopup } = useAuth0();
  const [vidData, setVidData] = useState([]);
  const [clickedCourse, setClickedCourse] = useState({});
  const findChildren = (data, targetProperty, result = []) => {
    for (const key in data) {
      if (typeof data[key] === 'object' && data[key] !== null) {
        if (key === targetProperty) {
          result.push(data[key]);
        } else {
          findChildren(data[key], targetProperty, result);
        }
      }
    }
    return result;
  };
  let res = findChildren(data, name);
  const sendTopicName = async (id) => {
    const serverUrl = 'https://projectserver-wxkm.onrender.com/regCourse';
    const obj = {
      course_id: id,
      user_id: user.sub,
      completed: "false"
    };
    await axios.post(serverUrl, obj);
  };
  const handleCardClick = (topic) => {
    const clickedCourse = vidData.find((course) => course.course_name === topic);
    setClickedCourse(clickedCourse);
    // sendData(clickedCourse?.course_id)
  };

  const sendReq = async () => {
    try {
      const serverURL = `https://projectserver-wxkm.onrender.com/course`;
      const res = await fetch(serverURL);
      const jsonRes = await res.json();
      setVidData(jsonRes);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    sendReq();
  }, []);

  function createCard(topic, prop) {
    return (
      <>
      <div >
        <div class="book">
          <span id="seconderyTopic">
            {Object.keys(prop).map((childTopic) => (
              <span key={childTopic}>
                <br></br>
                {childTopic}
              </span>
            ))}
          </span>
          <div class="cover">
            <p>{topic}</p>
          </div>
        </div>
        {isAuthenticated ? (
          <div>
            <Link to={`/Material/${topic}`}>
              <button id="button" onClick={() => handleCardClick(topic)}>
                Subscribe
              </button>
            </Link>

            <button onClick={logout} id="button">
              LogOut
            </button>
          </div>
        ) : (
          <button id="button" onClick={() => { loginWithPopup(); }}>
            Subscribe
          </button>
        )}
        </div>
      </>
    );
  }
  return (
    <>
      <div className="cardContainer">
        {res.map((val) => (
          Object.keys(val).map((property) => (
            createCard(property, val[property])
          ))
        ))}
      </div>
      <SideNavBar />
    </>
  );
}

export default NavigationMenu;
