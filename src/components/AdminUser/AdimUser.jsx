import React, { useState, useEffect } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Spinner } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Col, Row, Container, Button, Alert } from 'react-bootstrap';
import { cfg } from '../../cfg/cfg';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../AdminUser/AdminUser.scss';

function AdimUser() {
  const [user, setUser] = useState(null);
  const [show, setShow] = useState(false);
  const [louding, setLuoding] = useState(true);
  const [validated, setValidate] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [img, setImg] = useState('');
  const [status, setStatus] = useState({
    value: null,
    message: '',
  });
  const [loding, setLoding] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      setLuoding(true);
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/users/10'
        );

        if (!response.ok) throw new Error('Something went wrong!');

        const data = await response.json();

        console.log(data);
        setUser(data);
      } catch (error) {
      } finally {
        setLuoding(false);
      }
    };
    fetchUser();
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //   tikrinti klaidom
  const handleSubmit = async (e) => {
    e.preventDefault();
    setValidate(true);

    const form = e.currentTarget;
    if (!form.checkValidity()) return;

    console.log('created');

    try {
      setLoding(true);
      const data = {
        title,
        description,
      };

      if (img.trim()) data.img = img;

      const response = await fetch(`${cfg.API.HOST}/product`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      console.log(response);
      const product = response.json();

      if (!response.ok) throw new Error(product.error);
      setStatus({ value: 'sussecc', message: 'Your Log in is success' });
    } catch (error) {
      console.log('eror', error.message);
      setStatus({
        value: 'danger',
        message: error.message || 'Something went wrong',
      });
    } finally {
      setLoding(false);
    }
  };
  return (
    <>
      {louding ? (
        <Spinner animation="grow" />
      ) : (
        <>
          <div className="user" onClick={handleShow}>
            {user.username[0]}
          </div>
          <Offcanvas
            className="offcanvas"
            show={show}
            onHide={handleClose}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>{user.username}</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <h3>Log In</h3>
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row>
                  <Form.Group as={Col} md="4" controlId="validationCustom01">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      Title is required
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group as={Col} md="4" controlId="validationCustom02">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      className="form-control"
                      required
                      type="text"
                      placeholder="Description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      Password is required
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>

                <Button type="submit" disabled={loding}>
                  Log in
                </Button>
                {loding && <Spinner animation="grow" variant="dark" />}
              </Form>
              {status.value && (
                <Alert variant={status.value}>{status.message}</Alert>
              )}
            </Offcanvas.Body>
          </Offcanvas>
        </>
      )}
    </>
  );
}

export default AdimUser;
