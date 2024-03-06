// import React, { useRef, useEffect } from 'react';
// import Topics from '../Topics.css'
// import { Card } from 'react-bootstrap';
// import VanillaTilt from 'vanilla-tilt';
// import { Link } from 'react-router-dom';

// function Tilt(props) {
//     const { options, ...rest } = props;
//     const tilt = useRef();

//     useEffect(() => {
//         VanillaTilt.init(tilt.current, options);
//         return () => tilt.current.vanillaTilt.destroy();
//     }, [options]);

//     return <div ref={tilt} {...rest} />;
// }

// function WebTopics() {
//     const options = {
//         scale: 1,
//         speed: 1000,
//         max: 30
//     };
//     return (
//         <>
//             <div className='card-container'>
//                 <Link to="/Content/flutter" style={{ textDecoration: 'none' }}>
//                     <Tilt className="main-card" options={options}>
//                         <div className="card-image">
//                             <Card.Img variant="top" src={process.env.PUBLIC_URL + '/assets/ReactN.jpg'} />
//                         </div>
//                         <Card.Body>
//                             <Card.Title>Flutter</Card.Title>
//                             <Card.Text>
//                                 Flutter is a popular open-source UI software development kit created by Google, used to develop cross-platform applications for mobile, web, and desktop from a single codebase. It empowers developers to build visually stunning and highly performant applications with a rich set of customizable widgets, expressive designs, and powerful frameworks.                            </Card.Text>
//                         </Card.Body>
//                     </Tilt>
//                 </Link>
//                 <Link to="/Content/reactnative" style={{ textDecoration: 'none' }}>
//                     <Tilt className="main-card" options={options}>
//                         <div className="card-image">
//                             <Card.Img variant="top" src={process.env.PUBLIC_URL + '/assets/flutter.jpg'} />
//                         </div>
//                         <Card.Body>
//                             <Card.Title>React Native</Card.Title>
//                             <Card.Text>
//                             React Native is an open-source framework developed by Facebook that allows developers to build mobile applications using JavaScript and React. It enables developers to create cross-platform mobile applications that can run on both iOS and Android platforms while sharing a significant portion of the codebase.                            </Card.Text>
//                         </Card.Body>
//                     </Tilt>
//                 </Link>
//             </div>
//         </>
//     );
// }

// export default WebTopics;
