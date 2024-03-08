import React, { useState, useEffect } from 'react';
import './RegCourses.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useAuth0 } from '@auth0/auth0-react';
import { Card } from 'react-bootstrap';

function Courses() {
  const [allCourses, setAllCourses] = useState([]);
  const [comment, setComment] = useState('');
  const { user, loginWithPopup, logout, loginWithRedirect } = useAuth0();

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('https://projectserver-wxkm.onrender.com/regCourse');
        const data = await response.json();
        setAllCourses(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCourses();
  }, []);

  const filteredCourses = allCourses.filter(
    (course) => course.user_id === "auth0|65e7662c858d1fb60b75f2b2" && !course.completed
  );

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleCommentSubmit = async (courseId) => {
    if (!user) return;
    if (!comment) return; // Handle empty comment case

    try {
      const response = await fetch(`https://projectserver-wxkm.onrender.com/review`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user_id: user.sub, course_id: courseId, comment })
      });

      if (response.ok) {
        setComment(''); // Clear comment after successful submission
        console.log('Comment submitted successfully!');
      } else {
        console.error('Error submitting comment:', await response.text());
      }
    } catch (error) {
      console.error('Error submitting comment:', error);
    }
  };

  const handleCourseDelete = async (courseId) => {
    if (!user) return;
    console.log(courseId);
    console.log(user.sub);
    try {
      const response = await fetch(`https://projectserver-wxkm.onrender.com/regCourse/${user.sub}/${courseId}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        console.log('Course deleted successfully!');
      } else {
        console.error('Error deleting course:', await response.text());
      }
    } catch (error) {
      console.error('Error deleting course:', error);
    }
  };

  return (
    <>
      <div className="maxHight"></div>
      <center>
        <h2 className="title">Registered Courses</h2>
      </center>
      <div className="rowCard">
        <Row xs={1} md={4} className="g-4">
          {filteredCourses.map((course) => (
            <Col key={course.course_id}>
              <Card style={{ width: '22rem', backgroundColor: '#555', color: 'black' }}>
                <Card.Body>
                  <Card.Title>{course.course_name}</Card.Title>
                  <textarea
                    rows="1"
                    cols="30"
                    onChange={handleCommentChange}
                    placeholder="Add your comment"
                    value={comment}
                    style={{ backgroundColor: 'gray', color: 'black', border: '1px solid black' }}
                  />
                  <Button variant="dark" onClick={() => handleCommentSubmit(course.course_id)}>
                    Submit Comment
                  </Button>
                  <Button variant="danger" onClick={() => handleCourseDelete(course.course_id)}>
                    Delete Course
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
}

export default Courses;
