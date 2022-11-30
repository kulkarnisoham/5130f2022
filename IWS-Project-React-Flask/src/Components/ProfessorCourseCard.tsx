import React from "react";
import { Card, Container, ListGroup } from "react-bootstrap";

const ProfessorCourseCard = () => {
  return (
    <Container className="mt-4">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
        <Card.Body>
          <Card.Title>Course Name</Card.Title>
          <Card.Text>Course Details</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Professor Name</ListGroup.Item>
          <ListGroup.Item>Offered Semester</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">Respond to Requests</Card.Link>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ProfessorCourseCard;
