import React from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { createData } from '../services/apiHelpers';
import { useState } from 'react';

const SignInView = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = async (event) => {
    event.preventDefault();
    try {
      const data = {
        email,
        password,
      };
      const response = await createData('/api/users/login', data);
      console.log('Sign in successful:', response);
      navigate('/');  
    } catch (error) {
      console.error('Error signing in:', error);
      
    }
  };


  return (
<section className="sign-in">
  <div className="container">
  <div className="topp-content">
      <div className="heading">Sign in</div>
    </div>
    <div className="title">
        <i className="fa fa-pipe"></i>
          <h3>Welcome Back!</h3>
          <h4>Sign in to continue</h4>
      </div>
      <form className="form" onSubmit={handleSignIn}> 
        <div className="input-group">
          <label className="input-label" for="email">EMAIL</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="input-group">
          <label className="input-label" for="password">PASSWORD</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="info">
            <div className="remember-me">
                <input type="checkbox" />
                <label>Remember me</label>
            </div>
            <div className="forgot-me">
                <NavLink to="/forgotpassword" className="link"> Forgot Password?</NavLink>
            </div>    
        </div>
        <button type="submit" className="primary-btn">SIGN IN</button>
      </form>
      <div className="signin-link"> Don’t have an account? <NavLink to="/signup" className="link">Sign up.</NavLink>
    </div>
    <div className="social-icons">
      <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="icon facebook"><i className="fab fa-facebook-f"></i></a>
      <a href="https://www.twitter.com" target="_blank" rel="noreferrer" className="icon twitter"><i className="fa-brands fa-x-twitter"></i></a>
      <a href="https://www.google.com" target="_blank" rel="noreferrer" className="icon google"><i className="fab fa-google"></i></a>
    </div>    
</div>
</section>
  )
}

export default SignInView
