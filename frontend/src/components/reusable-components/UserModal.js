import React, { useState } from 'react';
import user from 'reducers/user';
import { Modal, Button } from 'react-bootstrap';
import { PaigeWrapper } from './GlobalStyles';
import { API_URL } from 'utils/utils';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import { useSelector, batch, useDispatch } from 'react-redux';
import { Devices } from './GlobalStyles';

export const UserModal = () => {
  const age = useSelector((store) => store.user.age)
  const name = useSelector((store) => store.user.name)
  const email = useSelector((store) => store.user.email)
  const facebook = useSelector((store) => store.user.facebook)
  const instagram = useSelector((store) => store.user.instagram)
  const presentation = useSelector((store) => store.user.presentation)
  const accessToken = useSelector((store) => store.user.accessToken);

  const userId = useSelector((store) => store.user.id)
  const [show, setShow] = useState(false);
  const [userData, setUserData] = useState({
    age: age,
    name: name,
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
            dispatch(user.actions.setName(data.response.name));
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
            dispatch(user.actions.setName(null));
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
    <>
      <ButtonOpen variant="primary" onClick={handleShow}>
        Redigera 
      </ButtonOpen>

      <Modal show={show}
        onHide={handleClose}
        size="lg"
        scrollable>
        <Modal.Header closeButton>
          <Modal.Title>Redigera profil</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ModalForm onSubmit={editProfile}>
          <label id="name" htmlFor="name">
              Namn:
            </label>
            <Input type="string" defaultValue={userData.name} onChange={(e) => setUserData({ ...userData, name: e.target.value })} />
            <label id="email" htmlFor="email">
              Email:
            </label>
            <Input type="email" defaultValue={userData.email} onChange={(e) => setUserData({ ...userData, email: e.target.value })} />
            <label id="age" htmlFor="age">Ålder:
            </label>
            <Input type="number" name="age" defaultValue={userData.age} onChange={(e) => setUserData({ ...userData, age: e.target.value })} />
            <label id="facebook" htmlFor="facebook">Facebook:
            </label>
            <Input type="text" name="facebook" defaultValue={userData.facebook} onChange={(e) => setUserData({ ...userData, facebook: e.target.value })} />
            <label id="instagram" htmlFor="instagram">Instagram:
            </label>
            <Input type="text" name="instagram" defaultValue={userData.instagram} onChange={(e) => setUserData({ ...userData, instagram: e.target.value })} />
            <label id="presentation" htmlFor="presentation">Presentation:
            </label>
            <textarea type="text" name="presentation" defaultValue={userData.presentation} onChange={(e) => setUserData({ ...userData, presentation: e.target.value })} />
            <ButtonSave type="submit">Spara</ButtonSave>
          </ModalForm>
        </Modal.Body>
        <Modal.Footer>

        </Modal.Footer>
      </Modal>
    </>
  );
}

/*           <ButtonClose onClick={handleClose}>
            Stäng
          </ButtonClose>*/

const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
`

const Input = styled.input`
  margin-bottom: 10px;
`

const ButtonSave = styled.button`
  background-color: #ECB390;
  width: 80px;
  border: solid 1px black;
  border-radius: 5px;
  padding: 5px;
  margin-top: 10px;
  
    @media ${Devices.laptop} {
      width: 100px;
      margin-top: 15px;
    }
    @media ${Devices.desktop} {
      width: 120px;
    }`

const ButtonOpen = styled(ButtonSave)`
  background-color: #ECB390;
  border: solid 1px black;`
  
const ButtonClose = styled(ButtonSave)`
  `


//https://react-bootstrap.github.io/components/modal/