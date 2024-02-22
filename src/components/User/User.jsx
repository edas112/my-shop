import React, { useState, useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import './user.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function User() {
  const [user, setUser] = useState(null);
  const [show, setShow] = useState(false);
  const [louding, setLuoding] = useState(true);

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
              <h3>General</h3>
              <p>
                <FontAwesomeIcon icon={faUser} />
                {user.name}
              </p>
              <p>
                <FontAwesomeIcon icon={faEnvelope} /> {user.email}
              </p>
            </Offcanvas.Body>
          </Offcanvas>
        </>
      )}
    </>
  );
}

export default User;
