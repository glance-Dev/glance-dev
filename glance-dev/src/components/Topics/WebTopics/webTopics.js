import React, { useRef, useEffect } from 'react';
import Topics from '../Topics.css'
import { Card, Button } from 'react-bootstrap';
import VanillaTilt from 'vanilla-tilt';
import { Link } from 'react-router-dom';

function Tilt(props) {
    const { options, ...rest } = props;
    const tilt = useRef();

    useEffect(() => {
        VanillaTilt.init(tilt.current, options);
        return () => tilt.current.vanillaTilt.destroy();
    }, [options]);

    return <div ref={tilt} {...rest} />;
}

function WebTopics() {
    const options = {
        scale: 1,
        speed: 1000,
        max: 30
    };

    return (
        <>
            <div className='card-container'>
                <Link to="/Content/frontend" style={{ textDecoration: 'none' }}>
                    <Tilt className="main-card" options={options}>
                        <div className="card-image">
                            <Card.Img variant="top" src={process.env.PUBLIC_URL + '/assets/webfront.jpg'} />
                        </div>
                        <Card.Body>
                            <hr></hr>
                            <Card.Title>React.js & Bootstrap</Card.Title>
                            <hr></hr>
                            <Card.Text>
                                React.js and Bootstrap team up for groundbreaking front-end development, offering dynamic user interfaces. Component-based architecture in React.js streamlines UI development, fostering collaboration among developers.</Card.Text>
                            <Button variant="primary">Explore</Button> {/* Add a button */}
                        </Card.Body>
                    </Tilt>
                </Link>
                <Link to="/Content/backend" style={{ textDecoration: 'none' }}>
                    <Tilt className="main-card" options={options}>
                        <div className="card-image">
                            <Card.Img variant="top" src={process.env.PUBLIC_URL + '/assets/webend2.jpg'} />
                        </div>
                        <Card.Body>
                            <hr></hr>
                            <Card.Title>Node.js & Express</Card.Title>
                            <hr></hr>
                            <Card.Text>
                                Node.js and Express rock the back-end world, powering scalable web apps. With event-driven architecture and non-blocking I/O, Node.js creates a strong runtime environment for server-side JavaScript. Seamlessly transition from front-end to back-end dev!.</Card.Text>
                            <Button variant="primary">Explore</Button> {/* Add a button */}
                        </Card.Body>
                    </Tilt>
                </Link>
            </div>
            <div className='card-container'>
                <Link to="/Content/flutter" style={{ textDecoration: 'none' }}>
                    <Tilt className="main-card" options={options}>
                        <div className="card-image">
                            <Card.Img variant="top" src={process.env.PUBLIC_URL + '/assets/ReactN.jpg'} />
                        </div>

                        <Card.Body>
                            <hr></hr>
                            <Card.Title>Flutter</Card.Title>
                            <hr></hr>
                            <Card.Text>
                                Flutter is a popular open-source UI software development kit created by Google, used to develop cross-platform applications for mobile, web, and desktop from a single codebase. It empowers developers to build visually stunning and highly performant applications with a rich set of customizable widgets.</Card.Text>
                            <Button variant="primary">Explore</Button> {/* Add a button */}
                        </Card.Body>
                    </Tilt>
                </Link>
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
                            <Button variant="primary">Explore</Button>
                        </Card.Body>
                    </Tilt>
                </Link>
            </div>

        </>
    );
}

export default WebTopics;
