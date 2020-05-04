import React, { useContext } from 'react';
import  UseContext from '../../UseContext/UseContext';
import { Container } from "../../Style/StyledComponents/MainPage";


const Profile = () => {
    const msg = useContext(UseContext);

return(
    <Container>
    <div>
        <h1>Hello WOrld</h1>
        <div>{msg}</div>
    </div>
    </Container>
    )
}

export default Profile;