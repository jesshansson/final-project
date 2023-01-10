import React, { useState } from 'react';
import user from 'reducers/user';
import { Modal, Button } from 'react-bootstrap';
import { PaigeWrapper } from './GlobalStyles';
import { API_URL } from 'utils/utils';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import { useSelector, batch, useDispatch } from 'react-redux';

export const UserModal = () => {
  const age = useSelector((store) => store.user.age)
  const email = useSelector((store) => store.user.email)
  const facebook = useSelector((store) => store.user.facebook)
  const instagram = useSelector((store) => store.user.instagram)
  const presentation = useSelector((store) => store.user.presentation)
  const accessToken = useSelector((store) => store.user.accessToken);
  
  const userId = useSelector((store) => store.user.id)
  const [show, setShow] = useState(false);
  const [userData, setUserData] = useState({
    age: age, 
    email: email,
    facebook: facebook,
    instagram: instagram,
    presentation: presentation
  });
  
const dispatch = useDispatch()

  console.log(userId)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
const editProfile = (event) => {
  event.preventDefault();
  const options = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "Authorization": accessToken
    },
    body: JSON.stringify({ ...userData })
  }
  fetch(API_URL(`profile/${userId}/update`), options) 
  .then(response => response.json())
  .then(data => {
    setUserData(data.response)
    if (data.success) {
      batch(() => {
        dispatch(user.actions.setUsername(data.response.username));
        dispatch(user.actions.setAge(data.response.age))
        dispatch(user.actions.setEmail(data.response.email));
        dispatch(user.actions.setInstagram(data.response.instagram));
        dispatch(user.actions.setPresentation(data.response.presentation));
        dispatch(user.actions.setFacebook(data.response.facebook));
        dispatch(user.actions.setError(null));
      });
    } else {
      batch(() => {
        dispatch(user.actions.setUsername(null));
        dispatch(user.actions.setAge(null))
        dispatch(user.actions.setEmail(null));
        dispatch(user.actions.setInstagram(null));
        dispatch(user.actions.setPresentation(null));
        dispatch(user.actions.setFacebook(null));
        //window.alert(data.response)
        dispatch(user.actions.setError(data.response));
      });
    }
  })
  handleClose()
}
  return (
    <PaigeWrapper>
      <ButtonOpen variant="primary" onClick={handleShow}>
        Redigera
      </ButtonOpen>

      <Modal show={show}
        onHide={handleClose}
        size="lg"
        scrollable>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!
          <form onSubmit={editProfile}>
            <label id="email" hmtlfor="email">
              Email
            </label>
            <input type="email" defaultValue={userData.email} onChange={(e) => setUserData({...userData, email: e.target.value})}/>
            <label id="age" hmtlfor="age">Ålder
            </label>
            <input type="number" name="age" defaultValue={userData.age} onChange={(e) => setUserData({...userData, age: e.target.value})}/>
            <label id="facebook" hmtlfor="facebook">Facebook
            </label>
            <input type="text" name="facebook" defaultValue={userData.facebook} onChange={(e) => setUserData({...userData, facebook: e.target.value})}/>
            <label id="instagram" hmtlfor="instagram">Instagram
              </label> 
              <input type="text" name="instagram" defaultValue={userData.instagram} onChange={(e) => setUserData({...userData, instagram: e.target.value})}/>
              <label id="presentation" hmtlfor="presentation">Presentation
            </label>
            <textarea type="text" name="presentation" defaultValue={userData.presentation} onChange={(e) => setUserData({...userData, presentation: e.target.value})}/>
<button type="submit">Spara</button>
          </form>
        </Modal.Body>
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

const ButtonClose = styled.button`
background-color: tomato`

const ButtonSave = styled.button`
background-color: tomato`

const ButtonOpen = styled.button`
background-color: tomato`


//https://react-bootstrap.github.io/components/modal/