import React, { useState, useEffect } from 'react';
import './RegCourses.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useAuth0 } from '@auth0/auth0-react';
import { Card } from 'react-bootstrap';

function Courses() {
  const [allCourses, setAllCourses] = useState([]);
  const [comments, setComments] = useState({});
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
  }, []); // Empty dependency array to run only once on mount

  const filteredCourses = user &&
    allCourses.filter((course) => course.user_id === user.sub && !course.completed);

  const handleCommentChange = (courseId, event) => {
    setComments((prevComments) => ({
      ...prevComments,
      [courseId]: event.target.value,
    }));
  };

  const handleCommentSubmit = async (courseId) => {
    if (!user) return; // Early return if user is not logged in
    try {
      const response = await fetch(`https://projectserver-wxkm.onrender.com/review`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user_id: user.sub, course_id: courseId, comment: comments[courseId] })
      });

      if (response.ok) {
        // Fetch the updated data after submitting the comment
        const updatedResponse = await fetch('https://projectserver-wxkm.onrender.com/regCourse');
        const updatedData = await updatedResponse.json();
        setAllCourses(updatedData);
        setComments({ ...comments, [courseId]: '' });
        console.log('Comment submitted successfully!');
      } else {
        console.error('Error submitting comment:', await response.text());
      }
    } catch (error) {
      console.error('Error submitting comment:', error);
    }
  };

  const handleCourseDelete = async (courseId) => {
    if (!user) return; // Early return if user is not logged in

    try {
      const response = await fetch(`https://projectserver-wxkm.onrender.com/regCourse/${user.sub}/${courseId}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        // Fetch the updated data after deleting the course
        const updatedResponse = await fetch('https://projectserver-wxkm.onrender.com/regCourse');
        const updatedData = await updatedResponse.json();
        setAllCourses(updatedData);
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
      <div className="maxHeight"></div>
      <center>
        <h2 className="title">Registered Courses</h2>
      </center>
      <div className="rowCard">
        {user && ( // Wrap course logic in a conditional statement
          <>
            <Row xs={1} md={4} className="g-4">
              {filteredCourses && filteredCourses.map((course) => (
                <Col key={course.course_id}>
                  <div className="cardCourse">
                    <div className="cardTitle">{course.course_name}</div>
                    <div className="card-body">
                      <textarea
                        rows="1"
                        cols="30"
                        onChange={(event) => handleCommentChange(course.course_id, event)}
                        placeholder="Add your comment"
                        className="textarea"
                      />
                      {comments[course.course_id] && (
                        <p className="comment">{comments[course.course_id]}</p>
                      )}
                      <Button variant="primary" className="btn" onClick={() => handleCommentSubmit(course.course_id)}>
                        Submit Comment
                      </Button>
                      <Button variant="danger" className="btn" onClick={() => handleCourseDelete(course.course_id)}>
                        Delete Course
                      </Button>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </>
        )}
        {!user && <p>Loading courses...</p>} {/* Display a placeholder while loading */}
      </div>
    </>
  );
}

export default Courses;
