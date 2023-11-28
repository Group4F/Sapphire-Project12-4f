import React, { useEffect, useState, } from 'react'
import { Modal } from "antd"
import "./TeacherDetails.css"
import { getTeachers } from '../../../Utils/requests';
import teacherData from './teachersData.json';

// function TeacherDetails(){
//   const[teachers, setTeachers] = useState([]);

//   useEffect(() => {
//       const fetchData = async () => {
//         try {
//           const res = await getTeachers();
//           if (res.data) {
//             if (res.data) {
//               setTeachers(res.data);
//               console.log(teachers);
//             }
//           } else {
//             message.error(res.err);
//           }
//         } catch {}
//       };
//       fetchData();
//     }, []);
//   return(

//       <div>
//     <h2>Teacher List</h2>
//     <ul>
//       {teachers.map((teacher) => (
//         <li key={teacher.id}>
//           <p>Name: {teacher.first_name} {teacher.last_name}</p>
//           <p>Email: {teacher.user.email}</p>
//           {/* Add more details as needed */}
//         </li>
//       ))}
//     </ul>
//   </div>
//   );
// }
// export default TeacherDetails;

function TeacherDetails() {
  // For Hovering
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    showModal();
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    if (isModalOpen == true) {
      setIsHovering(true);
    }
    else {
      setIsHovering(false);
    }
  };
  
  // For Modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <h1 className="teacherDetails-header">Teachers</h1>
      <div className="App">
      
        {
          teacherData && teacherData.map(teacher => {
            return (
              <div className="box" key={teacher.id}>

                &nbsp;<strong
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}>
                  {teacher.firstName} {teacher.lastName}
                </strong> <br />               

                {isHovering && (
                  <div onClick={closeModal}>
                    <Modal title="Teacher Details" open={isModalOpen} onOk={closeModal} footer = {null}>
                      
                      <strong> {teacher.firstName} {teacher.lastName} </strong>
                      <p> {teacher.email} </p>
                      {teacher.classrooms.map(data => {
                      return (
                        <div key={teacher.key}>
                          &nbsp;&nbsp;&nbsp;&nbsp;{data.courseName}
                          <div>&nbsp;&nbsp;&nbsp;&nbsp;# of Students: {data.students.length}</div>
                          <br />
                        </div>
                      )
                      })}

                    </Modal>
                  </div>
                )}

                &nbsp;<strong>{teacher.email}</strong>
                <div>&nbsp;Subject: {teacher.subject}</div>
                <div>&nbsp;Teaching {teacher.classrooms.length} Classrooms: </div>
                {teacher.classrooms.map(data => {
                  return (
                    <div key={teacher.key}>
                      &nbsp;&nbsp;&nbsp;&nbsp;{data.courseName}
                      <div>&nbsp;&nbsp;&nbsp;&nbsp;# of Students: {data.students.length}</div>
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