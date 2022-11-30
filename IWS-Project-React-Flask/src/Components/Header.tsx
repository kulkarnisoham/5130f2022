import React from "react";
import { Navbar, Container } from "react-bootstrap";

const Header = (props:any) => {
  return (
    <Navbar className="bg-primary" variant="light">
        <Container>
          <Navbar.Brand className="" href="/">{props.title}</Navbar.Brand>
        </Container>
      </Navbar>
  );
};

export default Header;