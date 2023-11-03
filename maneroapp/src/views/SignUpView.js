import React, { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom'
import { createData } from '../services/apiHelpers';

const SignUpView = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      console.error('Passwords do not match');
      // Handle error (e.g., show error message to user)
      return;
    }
    try {
      const data = {
        firstName,
        lastName,
        email,
        password,
      };
      const response = await createData('/auth/signup', data);
      console.log('Sign up successful:', response);
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      navigate('/');  // See if this will be the right path 
    } catch (error) {
      console.error('Error signing up:', error);
     
    }
  };


  return (
    <section className="signupsection">
      <div className="container">
        <h6>Sign Up</h6>
        <div className="title">
          <i className="fa fa-pipe"></i>
          <h3>Sign Up</h3>
        </div>
        <form className="form" onSubmit={handleSignUp}>
          <div className="input-group">
            <label className="input-label" htmlFor="firstname">FIRSTNAME</label>
            <input type="text" id="firstname" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
          </div>
          <div className="input-group">
            <label className="input-label" htmlFor="lastname">LASTNAME</label>
            <input type="text" id="lastname" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
          </div>
          <div className="input-group">
            <label className="input-label" htmlFor="email">EMAIL</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="input-group">
            <label className="input-label" htmlFor="password">PASSWORD</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <div className="input-group">
            <label className="input-label" htmlFor="confirmPassword">COMFIRM PASSWORD</label>
            <input type="password" id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          </div>
          <button type="submit" className="primary-btn">SIGN UP</button>
        </form>
        <div className="signin-link">
          Already have an account? <NavLink to="/signin" className="link">Sign In</NavLink>
        </div>
        <div className="social-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="icon facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noreferrer" className="icon twitter">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.google.com" target="_blank" rel="noreferrer" className="icon google">
            <i className="fab fa-google"></i>
          </a>
        </div>
      </div>
    </section>
  )
}


export default SignUpView




