
import React, { useState } from 'react';
import studentsData from './studentsdata.json';
import './ManageStudents.css'; 

function ManageStudents() {
  // Track the list of classes and students
  const [classes, setClasses] = useState(studentsData);

  // adding a new student to a specific class
  const addStudentToClass = (classIndex) => {
    // Prompt the admin for student details
    const firstName = window.prompt('Enter first name:');
    const lastName = window.prompt('Enter last name:');

    // Check if the admin provided valid input
    if (firstName && lastName) {
      const newStudent = {
        id: Date.now(),
        firstName,
        lastName,
      };

      const updatedClasses = [...classes];
      updatedClasses[classIndex].students.push(newStudent);

      setClasses(updatedClasses);
    } else {
      //  invalid input 
      alert('Please enter valid student details.');
    }
  };

  //  unenrolling a student from a specific class
  const unenrollStudentFromClass = (classIndex, studentIndex) => {
    const updatedClasses = [...classes];
    updatedClasses[classIndex].students.splice(studentIndex, 1);
    setClasses(updatedClasses);
  };

  return (
    <div>
      <h1 className="students-header">Manage Students</h1>

      {/*Show roster of classes */}
      {classes.map((classItem, classIndex) => (
        <div key={classIndex}>
          <h2>{classItem.className}</h2>

          {/* Button to add a new student to the class */}
          <button onClick={() => addStudentToClass(classIndex)}>Add Student</button>

          {/* List of students in the class */}
          <ul>
            {classItem.students.map((student, studentIndex) => (
              <li key={student.id}>
                {student.firstName} {student.lastName}
                {/* Button to unenroll a student from the class */}
                <button className="unenroll" onClick={() => unenrollStudentFromClass(classIndex, studentIndex)}>
                  Unenroll
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default ManageStudents;
