import React from 'react';
import Card from 'react-bootstrap/Card';

function TeacherCard({ classroom }) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{classroom.name}</Card.Title>
        <Card.Text>
          id: {classroom.id}
        </Card.Text>
        <Card.Text>
          <strong>Classrooms:</strong>
          <ul>
            {classroom.students && classroom.students.map((student) => (
              <li key={student.id}>
                {student.name}
              </li>
            ))}
          </ul>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default TeacherCard;