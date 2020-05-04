import React, { useEffect, useState } from 'react';
import { Container } from '../../Style/StyledComponents/Home';
import apiService from '../../Services/apiService';
import '../../Style/css/main.css'

const Home = () => {

    const [devs, setDevs] = useState([]);
    // const userName = localStorage.getItem('username'); agora basta colocar no logOut ou em outro campo que desejo <span> Olá {userName} </span>


    useEffect(() => {
        async function loadDevs() {
            const response = await apiService.get('/users');
            setDevs(response.data);
        }
        loadDevs();
    }, []);



    return (
        <Container>
            <main>
                <ul>
                    {devs.map(dev => (
                        <li key={dev._id} className='dev-item'>
                            <header>
                                <img src={dev.avatar_url} alt={dev.name} />
                                <div className='user-info'>
                                    <strong>{dev.name}</strong>
                                    <span>{dev.techs.join(', ')}</span>
                                </div>
                            </header>
                            <p>{dev.bio}</p>
                            <a href={`https://github.com/${dev.github_username}`}>Acessar perfil no Github</a>
                        </li>
                    ))}
                </ul>
            </main>
        </Container>
    )
}

export default Home;