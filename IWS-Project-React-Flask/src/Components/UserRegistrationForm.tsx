import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";

const UserRegistrationForm = (props:any) => {
  const [formData, setFormData]: any = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const [errors, setErrors]: any = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  function handleChange(event: any) {
    const name = event.target.name;
    const value = event.target.value;

    const data = {
      ...formData,
      [name]: value,
    };

    const newErrors = {
      ...errors,
      [name]: "",
    };

    setFormData(data);
    setErrors(newErrors);
  }
  console.log(formData);

  function handleSubmit(event:any) {
    event.preventDefault()

    axios.post('/api/signup', formData)
      .then(resp => {
        if (resp.data.errors) {
          setErrors(resp.data.errors)
        } else {
          props.history.push('/login')
        }
      })

  }
  return (
    <Container className="mt-3">
      <Form className="col-4" onSubmit={handleSubmit} method="post">
        <Form.Group className="mb-3">
          <Form.Label className="mt-2">First Name</Form.Label>
          <Form.Control
            type="Name"
            placeholder="Enter first name"
            id="firstName"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className="mt-2">Last Name</Form.Label>
          <Form.Control
            type="Name"
            id="lastName"
            placeholder="Enter last name"
          />
        </Form.Group>

        <Form.Group className="mb-3">
        <Form.Label className="mt-2">Please select your user type</Form.Label>
          <Form.Select>
            <option value="0">Student</option>
            <option value="1">Professor</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control type="name" placeholder="Username" id="username" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Email" id="email" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" id="password" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Confirm Password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default UserRegistrationForm;
