import React, { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom'
import { createData } from '../services/apiHelpers';

const SignUpView = () => {

  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (event) => {
    event.preventDefault();
    if (Password !== ConfirmPassword) {
      console.error('Passwords do not match');
      // Handle error (e.g., show error message to user)
      return;
    }
    try {
      const data = {
        FirstName,
        LastName,
        Email,
        Password,
      };
      const response = await createData('api/users/register', data);
      console.log('Sign up successful:', response);
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      navigate('/accountcreatedconfirm'); 
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
            <input type="text" id="firstname" value={FirstName} onChange={(e) => setFirstName(e.target.value)}/>
          </div>
          <div className="input-group">
            <label className="input-label" htmlFor="lastname">LASTNAME</label>
            <input type="text" id="lastname" value={LastName} onChange={(e) => setLastName(e.target.value)}/>
          </div>
          <div className="input-group">
            <label className="input-label" htmlFor="email">EMAIL</label>
            <input type="email" id="email" value={Email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="input-group">
            <label className="input-label" htmlFor="password">PASSWORD</label>
            <input type="password" id="password" value={Password} onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <div className="input-group">
            <label className="input-label" htmlFor="confirmPassword">COMFIRM PASSWORD</label>
            <input type="password" id="confirmPassword" value={ConfirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
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




