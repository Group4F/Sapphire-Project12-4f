import React from 'react';
import Card from 'react-bootstrap/Card';

function OrganizationCard({ organization }) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{organization.name}</Card.Title>
        
        
      </Card.Body>
    </Card>
  );
}

export default OrganizationCard;