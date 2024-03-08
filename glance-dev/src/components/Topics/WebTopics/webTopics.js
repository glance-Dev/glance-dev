import React, { useRef, useEffect } from 'react';
import Topics from '../Topics.css'
import { Card, Button } from 'react-bootstrap';
import VanillaTilt from 'vanilla-tilt';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import {useToast} from  "@chakra-ui/react";

function Tilt(props) {
    const { options, ...rest } = props;
    const tilt = useRef(null);
    useEffect(() => {
        const currentTilt = tilt.current;
        if (currentTilt) {
            VanillaTilt.init(currentTilt, options);
            return () => {
                if (currentTilt.vanillaTilt) {
                    currentTilt.vanillaTilt.destroy();
                }
            };
        }
        return () => { }; // No-op if tilt.current is null
    }, [options]);
    return <div ref={tilt} {...rest} />;
}

function WebTopics() {
    const options = {
        scale: 1,
        speed: 1000,
        max: 10
    };

    const registerUSer = async () => {
        const serverUrl = 'https://projectserver-wxkm.onrender.com/user';
        const obj = {
            user_id: user.sub,
            user_name: user.name,
            user_email: user.email
        };
        await axios.post(serverUrl, obj);
    }


    const { user } = useAuth0();
    const handelClick = async (id, courseName) => {
        const serverUrl = 'https://projectserver-wxkm.onrender.com/regCourse';
        const obj = {
            user_id: user.sub,
            course_id: id,
            completed: false,
            course_name: courseName
        };
        await axios.post(serverUrl, obj);
    };

    return (
        <>
            <div className='card-container'>

                <Tilt className="main-card" options={options}>
                    <Link to="/Content/frontend" style={{ textDecoration: 'none' }}>
                        <div className="card-image">
                            <Card.Img variant="top" src={process.env.PUBLIC_URL + '/assets/webfront.jpg'} />
                        </div>
                    </Link>
                    <Card.Body>
                        <hr></hr>
                        <Card.Title>ReactJS & Bootstrap</Card.Title>
                        <hr></hr>
                        <Card.Text>
                            React.js and Bootstrap team up for groundbreaking front-end development, offering dynamic user interfaces. Component-based architecture in React.js streamlines UI development, fostering collaboration among developers.</Card.Text>
                        <div className='getButton'> <Button variant="info" onClick={() => handelClick(1234, "frontend")}>GET!</Button></div>
                    </Card.Body>
                </Tilt>


                <Tilt className="main-card" options={options}>
                    <Link to="/Content/backend" style={{ textDecoration: 'none' }}>
                        <div className="card-image">
                            <Card.Img variant="top" src={process.env.PUBLIC_URL + '/assets/webend2.jpg'} />
                        </div>
                    </Link>
                    <Card.Body>
                        <hr></hr>
                        <Card.Title>Node.js & Express</Card.Title>
                        <hr></hr>
                        <Card.Text>
                            Node.js and Express rock the back-end world, powering scalable web apps. With event-driven architecture and non-blocking I/O, Node.js creates a strong runtime environment for server-side JavaScript. Seamlessly transition from front-end to back-end dev!.</Card.Text>
                        <div className='getButton'></div><div className='getButton'><Button variant="info" onClick={() => handelClick(12345, "backend")}>GET!</Button></div>
                    </Card.Body>
                </Tilt>



                <Tilt className="main-card" options={options}>
                    <Link to="/Content/flutter" style={{ textDecoration: 'none' }}>
                        <div className="card-image">
                            <Card.Img variant="top" src={process.env.PUBLIC_URL + '/assets/ReactN.jpg'} />
                        </div>
                    </Link>
                    <Card.Body>
                        <hr></hr>
                        <Card.Title>Flutter</Card.Title>
                        <hr></hr>
                        <Card.Text>
                            Flutter is a open-source UI software development kit created by Google, used to develop cross-platform applications for mobile, web, and desktop from a single codebase. It empowers developers to build visually stunning and highly performant applications with a rich set of customizable widgets.</Card.Text>
                        <div className='getButton'> <Button variant="info" onClick={() => handelClick(123456, "flutter")}>GET!</Button></div>
                    </Card.Body>
                </Tilt>

                <Link to="/Content/reactnative" style={{ textDecoration: 'none' }}>
                    <Tilt className="main-card" options={options}>
                        <div className="card-image">
                            <Card.Img variant="top" src={process.env.PUBLIC_URL + '/assets/flutter.jpg'} />
                        </div>
                        <Card.Body>
                            <hr></hr>
                            <Card.Title>React Native</Card.Title>
                            <hr></hr>
                            <Card.Text>
                                React Native is an open-source framework developed by Facebook that allows developers to build mobile applications using JavaScript and React. It enables developers to create cross-platform mobile applications that can run on both iOS and Android platforms.</Card.Text>
                            <div className='getButton'> <Button variant="info" onClick={() => handelClick(1234567, "reactnative")}>GET!</Button></div>
                        </Card.Body>
                    </Tilt>
                </Link>
            </div>

        </>
    );
}

export default WebTopics;
