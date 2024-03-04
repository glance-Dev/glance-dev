import 'bootstrap/dist/css/bootstrap.min.css';
import './Courses.css';
import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';



function Courses() {

    const [courseData, setCourseData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://projectserver-wxkm.onrender.com/cousre');
                const data = await response.json();
                setCourseData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (

        <Row xs={1} md={2} className="g-4">
            {courseData.map((course) => (
                <Col key={course.course_Id}>
                        <Card>
                            <Card.Body>
                                <div class="notification">
                                    <div class="notiglow"></div>
                                    <div class="notiborderglow"></div>
                                    <Card.Title className="notititle">{course.course_name}</Card.Title>
                                </div>

                            </Card.Body>
                        </Card>
                </Col>
            ))}
        </Row>
    );
}

export default Courses;