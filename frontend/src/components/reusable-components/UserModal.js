import React, { useState } from 'react';
import user from 'reducers/user';
import { Modal } from 'react-bootstrap'; 
import { API_URL } from 'utils/utils';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import { useSelector, batch, useDispatch } from 'react-redux';
import { Devices } from './GlobalStyles';

export const UserModal = ({userDetails}) => {
  const userId = useSelector((store) => store.user.id)
  const {age, email,facebook,instagram,presentation,accessToken} = userDetails
  const [show, setShow] = useState(false);
  const [userData, setUserData] = useState({});

  const dispatch = useDispatch()
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
            <label id="email" htmlFor="email">
              Email:
            </label>
            <Input type="email" defaultValue={email} onChange={(e) => setUserData({ ...userData, email: e.target.value })} />
            <label id="age" htmlFor="age">Ålder:
            </label>
            <Input type="number" name="age" defaultValue={age} onChange={(e) => setUserData({ ...userData, age: e.target.value })} />
            <label id="facebook" htmlFor="facebook">Facebook:
            </label>
            <Input type="text" name="facebook" placeholder="Länkadress till profilsida" defaultValue={facebook} onChange={(e) => setUserData({ ...userData, facebook: e.target.value })} />
            <label id="instagram" htmlFor="instagram">Instagram:
            </label>
            <Input type="text" name="instagram" placeholder="Användarnamn"  defaultValue={instagram} onChange={(e) => setUserData({ ...userData, instagram: e.target.value })} />
            <label id="presentation" htmlFor="presentation">Presentation:
            </label>
            <textarea type="text" name="presentation" defaultValue={presentation} onChange={(e) => setUserData({ ...userData, presentation: e.target.value })} />
            <ButtonSave type="submit">Spara</ButtonSave>
          </ModalForm>
        </Modal.Body>
        <Modal.Footer>

        </Modal.Footer>
      </Modal>
    </>
  );
}


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
  border: 0px;
  transition: ease-out 0.2s;
  font-size: 17px;
 
  &:hover {
    transform: scale(1.05);
  }

  @media ${Devices.tablet} {
    padding: 7px;
    }

  @media ${Devices.laptop} {
    padding: 5px;
    }`
  
