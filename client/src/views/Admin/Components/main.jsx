import React from 'react'
import ReactDOM from 'react-dom/client'
import TeacherDetails from './TeacherDetails.jsx'
import './TeacherDetails.css'
import './teachersData.json'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TeacherDetails />
  </React.StrictMode>,
)