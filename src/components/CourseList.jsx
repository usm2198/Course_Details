import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function CourseList() {
    const [course, setCourse] = useState([])
    const navigate = useNavigate()

    // to get api 
    async function getCourse() {
        try {
            const res = await fetch('https://coursedetails-api-service.onrender.com/api/course')
            const data = await res.json()
            console.log(data, "Course List");
            setCourse(data)
        } catch (error) {
            console.log(error.message);
        }
    }

    // Handle click
    function handleClick(el) {
        navigate('/course-details',{state: el})
    }

    useEffect(()=>{
        getCourse();
    },[])
  return (
    <div className="container">
        <div className="row">
            {course.map(el =>(
                <div key={el.id} className="col-md-3" >
                    <div className="card">
                        <img className="card-img-top" src={el.thumbnail} alt='' />
                        <h2 className='card-title'>{el.name}</h2>
                        <div className="card-body">
                            {el.description}
                            <button onClick={()=>{
                                handleClick(el)
                            }} className="btn btn-primary">Show More</button>
                        </div>            
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default CourseList
