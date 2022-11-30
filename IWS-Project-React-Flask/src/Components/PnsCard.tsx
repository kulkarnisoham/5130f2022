import React from "react";
import { Button, Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const PnsCard = () => {
  return (
    <Container className="mt-5">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Permission Number System</Card.Title>
          <Card.Text>
            Request permission numbers for the classes here.
          </Card.Text>
          <Link to={"/user-login"}>
          <Button variant="primary">Access PNS</Button>
          </Link>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default PnsCard;
