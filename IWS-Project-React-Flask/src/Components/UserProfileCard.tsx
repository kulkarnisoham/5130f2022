import React from "react";
import { Card, Row } from "react-bootstrap";

const UserProfileCard = (props: any) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title>Professor Name</Card.Title>
        <Card.Text>Here is some information about the professor</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default UserProfileCard;
