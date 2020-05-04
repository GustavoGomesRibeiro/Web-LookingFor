import React, { useEffect, useState } from 'react';
import { Form, Container } from "../../Style/StyledComponents/Forms";
import { Link, useHistory } from 'react-router-dom';
import apiService from '../../Services/apiService';
import logo from '../../Style/img/logo.png';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()
const Register = () => {

    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [github_username, setGithubUsername] = useState('');
    const [techs, setTechs] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const history = useHistory();

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;

                setLatitude(latitude);
                setLongitude(longitude);
            },
            (err) => {
                console.log(err);
            }, {
            timeout: 30000,
        }
        )
    }, []);


    async function registerDev(event) {
        event.preventDefault();
        try {
            const response = await apiService.post('/users', {
                username,
                password,
                github_username,
                techs,
                latitude,
                longitude,
            });
            console.log(response)
            toast.success('Foi cadastrado com sucesso!')
            history.push('/');
        } catch (err) {
            toast.error('Erro ao realizar o cadastro!')
            console.log(err, 'erro aqui')
        }
        setUserName('');
        setPassword('');
        setGithubUsername('');
        setTechs('');
    }

    return (
        <>
            <Container>
                <Form onSubmit={registerDev}>
                    <img src={logo} alt='Project with React logo' />
                    <input type='text' placeholder='Digite seu Username' value={username} onChange={event => setUserName(event.target.value)} />
                    <input type='text' placeholder='Tecnologias' value={techs} onChange={event => setTechs(event.target.value)} />
                    <input type='text' placeholder='Nome do GitHub' value={github_username} onChange={event => setGithubUsername(event.target.value)} />
                    <input type='password' placeholder='Digite sua senha' value={password} onChange={event => setPassword(event.target.value)} />
                    <input type='password' placeholder='Confirme sua senha' value={password} onChange={event => setPassword(event.target.value)} />
                    <input name='latitude' id='latitude' placeholder='Latitude' value={latitude} onChange={event => setLatitude(event.target.value)} />
                    <input name='longitude' id='longitude' placeholder='Longitude' value={longitude} onChange={event => setLongitude(event.target.value)} />

                    <button type='submit'>Registrar</button>
                    <hr />
                    <Link to='/'>Login</Link>
                </Form>
            </Container>
        </>
    )
}

export default Register;