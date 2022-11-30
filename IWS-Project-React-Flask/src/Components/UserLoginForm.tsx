import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";

const UserLoginForm = (props: any) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function handleChange(event: any) {
    const data = {
      ...formData,
      [event.target.name]: event.target.value,
    };
    setFormData(data);
  }

  function handleSubmit(event: any) {
    event.preventDefault();

    axios.post("/api/login", formData).then((resp) => {
      console.log(resp.data);
      localStorage.setItem("token", resp.data.token);
      localStorage.setItem("userId", resp.data.user_id);
      localStorage.setItem("userName", resp.data.username);

      props.history.push("/");
      window.location.reload();
    });
  }

  return (
    <Container className="mt-3">
      <Form className="col-4" method="post">
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email"
            id="email"
            onChange={handleChange}
            value={formData.email}
            name="email"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            id="password"
            onChange={handleChange}
            value={formData.password}
            name="password"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default UserLoginForm;
