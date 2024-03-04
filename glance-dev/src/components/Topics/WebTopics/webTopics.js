import React, { useState, useRef, useEffect } from 'react';
import './webTopics.css';
import { Card } from 'react-bootstrap';
import VanillaTilt from 'vanilla-tilt';

function Tilt(props) {
    const { options, ...rest } = props;
    const tilt = useRef(null);

    useEffect(() => {
        VanillaTilt.init(tilt.current, options);
        return () => tilt.current.vanillaTilt.destroy();
    }, [options]);

    return <div ref={tilt} {...rest} />;
}

function WebTopics() {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(true);
    };

    const options = {
        scale: 1,
        speed: 1000,
        max: 30
    };

    return (
        <>
            <div className='card-container'>
                <a href="your_link_here" style={{ textDecoration: 'none' }}>
                    <Tilt className={`main-card ${isClicked ? 'card-animated' : ''}`} options={options} onClick={handleClick}>
                        <div className="card-image">
                            <Card.Img variant="top" src={process.env.PUBLIC_URL + '/assets/development-with-abstract-background.jpg'} />
                        </div>
                        <Card.Body>
                            <Card.Title>Front-End (React.js & Bootstrap)</Card.Title>
                            <Card.Text>
                                React.js and Bootstrap empower front-end development by creating reusable UI components and responsive layouts, enhancing user experience.
                            </Card.Text>
                        </Card.Body>
                    </Tilt>
                </a>
                <a href="your_link_here" style={{ textDecoration: 'none' }}>
                    <Tilt className={`main-card ${isClicked ? 'card-animated' : ''}`} options={options} onClick={handleClick}>
                        <div className="card-image">
                            <Card.Img variant="top" src={process.env.PUBLIC_URL + '/assets/development-with-abstract-background.jpg'} />
                        </div>
                        <Card.Body>
                            <Card.Title>Back-End (Node.js & Express)</Card.Title>
                            <Card.Text>
                                Node.js and Express streamline back-end development, enabling efficient server-side logic, routing, and database interactions for robust web applications.
                            </Card.Text>
                        </Card.Body>
                    </Tilt>
                </a>
            </div>
        </>
    );
}

export default WebTopics;
