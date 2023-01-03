import { Login } from 'components/Login';
import React, { useState } from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';

// Binds modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

const popUpStyle = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    zIndex: "2",
  },
};


export const PopUp = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        style={popUpStyle}
      >
        <h1>Modal Title</h1>
        <p>Modal content</p>
        
        <button onClick={() => setIsModalOpen(false)}>Close Modal</button>
      </Modal>
    </div>
  );
}


