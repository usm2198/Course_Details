import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import CourseList from './components/CourseList'
import CourseDetails from './components/CourseDetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <Routes>
          <Route path='' element={<CourseList />} />
          <Route path='course-details' element={<CourseDetails />} />
        </Routes>
    </div>
  )
}

export default App
