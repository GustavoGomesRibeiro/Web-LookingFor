import React, { Component } from 'react';
import '../Style/Tailwind/output.css';
import { useHistory } from 'react-router-dom';
import logo from '../Style/img/logo.png';
import * as Icon from 'react-feather';
import '../Style/css/header.css';


// class DefaultHeader extends Component {
//      Logout = () => {
//         localStorage.clear();
//         useHistory.push('/');
//     };
const DefaultHeader = () => {
    // render() {
        const history = useHistory();
        const userProfile = localStorage.getItem('username');
        function LogOut() {
            localStorage.clear();
            history.push('/');
        }
        return (
            <>
                <header>
                    <nav className='flex justify-between'>
                        <div className='flex bg-gray-200 w-full z-40'>
                            <div className='w-3/4 h-20 bg-gray-600'>
                                <img className='h-20' src={logo} alt='LookingFor' />
                            </div>
                            <div className='w-1/4 bg-gray-400 profile-container'>
                                <span className=''>Bem vindo(a), {userProfile}</span>
                                <button onClick={LogOut} type='button'>
                                    <Icon.LogOut size='20' />
                                </button>
                            </div>
                        </div>
                    </nav>
                </header>
            </>
        )
    // }
}

export default DefaultHeader;