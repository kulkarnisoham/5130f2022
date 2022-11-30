import React from "react";
import { Row, Button, Table, Col, Container } from "react-bootstrap";

const PNRTable = () => {
  return (
    <Container className="mt-4">
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Request Date</th>
            <th>Accept/Decline</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>10/23/2022</td>
            <td>
              <Row className="row col-6 align-center">
                <Col>
                  <Button className="btn-success">Accept</Button>
                </Col>
                <Col>
                  <Button className="btn-danger">Decline</Button>
                </Col>
              </Row>
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default PNRTable;
