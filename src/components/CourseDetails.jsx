import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

function CourseDetails() {
    const [course, setCourse] = useState([])
    const location = useLocation()
    const el = location.state
    console.log(el);

    // Useffect
    useEffect(()=>{
        setCourse(el)
    },[])
  return (
    <div className="container">
        <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
                <div className="card">
                    <img src={course.thumbnail} alt="" className="card-img-top" />
                    <h2>{course.name}</h2>
                    <div className="card-body">
                        <ul className="list-group">
                            <li className="li-group-item">
                                Description: {course.description}
                            </li>
                            <li className="li-group-item">
                                Instructor: {course.instructor}
                            </li>
                        </ul>
                        <div className="row">
                        {/* {course.students.map(()=>(
                            <div key={el.id} className="col-md-6">
                                <div className="card m-2 p-2 shadow-lg">
                                    <h3>{el.name}</h3>
                                </div>
                            </div>
                        ))} */}
                        </div>                     
                    </div>
                </div>
            </div>
            <div className="col-md-3"></div>
        </div>
    </div>
  )
}

export default CourseDetails