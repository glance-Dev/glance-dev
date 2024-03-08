import React, { useState, useEffect } from 'react';
import './CompletedCourses.css'

function CompletedCourses() {
    const [completedCourses, setCompletedCourses] = useState([]);

    useEffect(() => {
        fetchCompletedCourses();
    }, []);

    const fetchCompletedCourses = async () => {
        try {
            const res = await fetch('https://projectserver-wxkm.onrender.com/regCourse');
            const data = await res.json();
            const completed = data.filter(course => course.completed);
            setCompletedCourses(completed);
        } catch (error) {
            console.error(error);
        }
    };
    const filteredCourses = completedCourses.filter(course => course.user_id ==="auth0|65e7662c858d1fb60b75f2b2"  && course.completed==true);
    return (
        <>
           <center> <h2 className='title2'>Completed Courses</h2></center>
            <div className="notification-container">
                {filteredCourses.map((course) => (
                    <div className="notification" key={course.course_Id}>
                        <div className="notiglow"></div>
                        <div className="notiborderglow">

                        </div>

                        <div className="notititle"> <h1> {course.course_name} </h1> </div>
                        <div className="notibody">Completed</div>
                    </div>
                ))}
            </div>
        </>
    );
}
export default CompletedCourses;
