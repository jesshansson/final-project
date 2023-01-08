import React, { useState } from 'react';
import {Modal, Button} from 'react-bootstrap';
import { PaigeWrapper } from './GlobalStyles';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

export const UserModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <PaigeWrapper>
      <ButtonOpen variant="primary" onClick={handleShow}>
        Launch demo modal
      </ButtonOpen>

      <Modal show={show} 
      onHide={handleClose}
      size="lg"
      scrollable>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <ButtonClose variant="secondary" onClick={handleClose}>
            Close
          </ButtonClose>
          <ButtonSave variant="primary" onClick={handleClose}>
            Save Changes
          </ButtonSave>
        </Modal.Footer>
      </Modal>
    </PaigeWrapper>
  );
}

const ButtonClose =styled.button`
background-color: tomato`

const ButtonSave =styled.button`
background-color: tomato`

const ButtonOpen =styled.button`
background-color: tomato`


//https://react-bootstrap.github.io/components/modal/