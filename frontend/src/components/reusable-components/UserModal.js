import React, { useState } from 'react';
import {Modal, Button} from 'react-bootstrap';
import { PaigeWrapper } from './GlobalStyles';
import 'bootstrap/dist/css/bootstrap.min.css';

export const UserModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <PaigeWrapper>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} 
      onHide={handleClose}
      size="lg"
      scrollable>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </PaigeWrapper>
  );
}


//https://react-bootstrap.github.io/components/modal/