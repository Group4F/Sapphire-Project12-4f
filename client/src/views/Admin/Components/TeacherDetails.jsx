import React from 'react'
import "./TeacherDetails.css"
import teacherData from './teachersData.json';

function TeacherDetails() {
  return(
    <div>
      <h1 className="teacherDetails-header">Teachers</h1>
      <div className="App">
      
      {
        teacherData && teacherData.map( teacher => {
          return(
             <div className="box" key={ teacher.id }>
              &nbsp;<strong>{ teacher.firstName } { teacher.lastName }</strong> <br />
              &nbsp;<strong>{ teacher.email }</strong>
              <div>&nbsp;Subject: { teacher.subject }</div>
              <div>&nbsp;Teaching { teacher.classrooms.length } Classrooms: </div>
               {teacher.classrooms.map( data => {
                return( 
                  <div key={teacher.key}>
                  &nbsp;&nbsp;&nbsp;&nbsp;{ data.courseName }
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;# of Students: { data.students.length }</div>
                  <br />
                  </div>
                )
               })}
               <br />
             </div>
          )
        })
      }

      </div>
	  </div>
  );
};

export default TeacherDetails;