
import React from 'react';
import ReactDOM from 'react-dom';
import ManageStudents from './ManageStudents.jsx';
import './index.css';
import './ManageStudents.css'; // Import the CSS file
import studentsData from './studentsdata.json';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ManageStudents studentsData={studentsData} />
  </React.StrictMode>
);
