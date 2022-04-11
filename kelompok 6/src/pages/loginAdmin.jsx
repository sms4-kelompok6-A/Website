import React, { Component } from 'react'
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../auth/auth';
import '../css/form.css';

const Login = () => {

    const auth = useAuth()
    const history = useHistory()

    const handleLogin = () => {
        auth.login("user")
        history.replace('/')
    }
    
        return (
            <div>

                <form onSubmit={handleLogin}>
                    <h3>Selamat Datang<br/>
                    Silahkan masukkan email dan password</h3>
                     <input type="text" placeholder="Email" /><br />
                     <input type="password" placeholder="Password" /><br />
                    <input type="submit" value="Masuk" />
                </form>

            </div>
            
        )
}

export default Login