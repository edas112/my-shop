import React from 'react';
import Form from 'react-bootstrap/Form';
import { Col, Row, Container } from 'react-bootstrap';

function admin() {
  const handleSubmit = () => {};

  return (
    <div className="my-conteiner">
      <h1>Add product</h1>
      <Container>
        <form noValidate onSubmit={handleSubmit}>
          <Row>
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>First name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="First name"
                defaultValue="Mark"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>
        </form>
      </Container>
    </div>
  );
}

export default admin;
