import React from "react";
import { Card, ListGroup } from "react-bootstrap";

const StudentCourseCard = () => {
  return (
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
        <Card.Link href="#">Request Permission Number</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default StudentCourseCard;
