import React, { useEffect, useState } from 'react'
import { useSelector} from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { ProfileWrapper, Card, ProfileImg, Age, 
DescriptionProfile2, SoMeWrapperProfile, SoMeIconProfile, ContactButton, SoMeIconLinkProfile } from './UserProfile';


export const VisitUserProfile = () => {
    const [userDetails, setUserDetails] = useState("")
    const accessToken = useSelector((store) => store.user.accessToken);
    const navigate = useNavigate();
    const { id } = useParams()
    /*const username = useSelector((store) => store.user.username);
    const name = useSelector((store) => store.user.name);
    const email = useSelector((store) => store.user.email);
    const age = useSelector((store) => store.user.age)
    const presentation = useSelector((store) => store.user.presentation)
    const facebook = useSelector((store) => store.user.facebook)
    const instagram = useSelector((store) => store.user.instagram)
    const profileImage = useSelector((store) => store.user.profileImage)
*/

  const [username, setUsername] = useState()
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [age, setAge] = useState()
  const [presentation, setPresentation] = useState()
  const [facebook, setFacebook] = useState()
  const [instagram, setInstagram] = useState()

  const userData = {age, name, email,facebook,instagram,presentation,accessToken, }


    useEffect(() => {
      if (!accessToken) {
        navigate("/unauthorized");
      }
    }, [accessToken])

    useEffect(() => {
      fetch(`https://final-project-m2dbj6puqa-lz.a.run.app/profile/${id}`)
        .then((res) => res.json())
        .then((data) => setUserDetails(data.response));
    }, [id]);



  return (
      <ProfileWrapper>
        <Card accessToken={accessToken} userDetails={userDetails}>
        <ProfileImg src="https://th.bing.com/th/id/OIP.IB0XUg8PV5FGxOf0WWDdOQHaHa?pid=ImgDet&rs=1" alt="John" />
          <h1>{name}</h1>
          <h2>{username}</h2>
          <Age>{age} år</Age>
          <DescriptionProfile2>{presentation}

          </DescriptionProfile2>
          <SoMeWrapperProfile>
            <SoMeIconProfile href={`https://instagram.com/${instagram}`}>
              <SoMeIconLinkProfile className="fa fa-instagram" />
            </SoMeIconProfile>
            <SoMeIconProfile href={facebook}>
              <SoMeIconLinkProfile className="fa fa-facebook" />
            </SoMeIconProfile>
          </SoMeWrapperProfile>
          <p>
            <a href={`mailto:${email}`}>
              <ContactButton>Maila mig!</ContactButton>
            </a>
          </p>
        </Card >
      </ProfileWrapper >
  );
};
