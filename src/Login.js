import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Only import useNavigate
import { auth } from './firebase'; // Ensure correct Firebase import
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'; // Import correct methods
import './Login.css';

function Login() {
  const navigate = useNavigate(); // Use navigate for redirection
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Sign-in function
  const signIn = (e) => {
    e.preventDefault();
    
    signInWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        console.log('User signed in:', auth);
        navigate('/'); // Redirect to home page
      })
      .catch((error) => alert(error.message));
  };

  // Register function
  const register = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        console.log('User registered:', auth);
        if (auth) {
          navigate.push('/'); // Redirect after sign-up
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          alt="Amazon Logo"
        />
      </Link>

      <div className="login__container">
        <h1>Sign-In</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" onClick={signIn} className="login__signInButton">
            Sign In
          </button>
        </form>

        <p>
          By signing-in you agree to Amazon's Conditions of Use & Sale. Please
          see our Privacy Notice, Cookies Notice, and Interest-Based Ads.
        </p>

        <button onClick={register} className="login__registerButton">
          Create Your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
