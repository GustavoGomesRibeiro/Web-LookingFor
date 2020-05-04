import React, {useState} from 'react';
import { Form, Container, ImagemCapa } from "../../Style/StyledComponents/Forms";
import apiService from '../../Services/apiService';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useHistory } from 'react-router-dom';
import logo from '../../Style/img/logo.png';
import destiny from '../../Style/img/destiny.jpg'
import * as Icon from 'react-feather';

toast.configure()
const Login = () => {
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    async function authenticate (event) {
        event.preventDefault()

        try {
            if(!username || !password){
                toast.error('Todos os campos devem ser preenchidos!')
            }
            const response = await apiService.post('/login',{
                username,
                password
            })
            console.log(response)
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            history.push('/Home') 
        } catch (err) {
            toast.error('Usuario ou senha estão incorretos!')
        }
    }


        return (
            <>
            <Container>
                <Form onSubmit={authenticate}>
                    <img src={logo} alt='LookingFor'/>
                        <input type='text' placeholder='Digite seu Username' value={username} onChange={event => setUsername(event.target.value)}/>
                        <input type='password' placeholder='Digite sua senha' value={password} onChange={event => setPassword(event.target.value)}/>
                        <button type='submit'>Acessar</button>
                        <hr/>
                        <a>
                            <Link to='/register'>
                                <Icon.LogIn color='#e02041'/> Registrar
                            </Link>
                        </a>
                </Form>
                <ImagemCapa>
                    <img src={destiny} alt='Destiny'/>
                </ImagemCapa>
            </Container>
            </>
        )
}
export default Login;
