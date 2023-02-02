import React, { useState } from 'react';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import auth from '../../firebase.init';
import './LogIn.css';
import {useSignInWithEmailAndPassword} from 'react-firebase-hooks/auth'

const LogIn = () => {
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');
    const [signInWithEmailAndPassword, user, loading, error ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const location = useLocation();
  
    const from = location?.state?.from?.pathname || "/";

    const handleEmailBlur = (event) =>{
        setEmail(event.target.value)
    }

    const handlePasswordBlur = (event) =>{
        setPassword(event.target.value)
    }
    if (user) {
        navigate(from, {replace:true});
      }
    const handleOnSubmit = event =>{
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }
    return (
        <div className='form-container'>
        <h2 className='form-title'>Login</h2>
        <form onSubmit={handleOnSubmit}>
            <div className="form-control">
                <label htmlFor="email">Email</label>
                <input onBlur={handleEmailBlur} type="email" name="email" required />
            </div>
            <div className="form-control">
                <label htmlFor="password">Password</label>
                <input onBlur={handlePasswordBlur} type="password" name="password" required />
            </div>
            {loading && <p>Loading...</p>}
            <p style={{color:'red'}}>{error?.message}</p>
            <input className='btn-submit' type="submit" value="Login" />
        </form>
        <p>New here ? <Link to='/signup'>Create a New Account</Link></p>
    </div>
    );
};

export default LogIn;