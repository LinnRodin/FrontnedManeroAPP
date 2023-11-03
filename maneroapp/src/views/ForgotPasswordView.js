import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { sendResetLink } from '../services/apiHelpers';

const ForgotPasswordView = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSendResetLink = async (e) => {
    e.preventDefault();

    try {
      await sendResetLink('/auth/send-reset-link', { email });
      console.log('Reset link sent. Check your email');
      navigate('/passwordreset'); // Navigera till '/passwordreset' efter skickande av återställningslänken
    } catch (error) {
      console.log('An error occurred while sending the reset link', error);
    }
  };

  return (
    <section className="forgot-password">
      <div className="container">
        <div className="topp-content">
          <div className="heading">Forgot password</div>
        </div>
        <div className="title">
          Please enter your email address. You will <br /> receive a link to create a new password via <br /> email.
        </div>
        <form className="form" onSubmit={handleSendResetLink}>
          <div className="input-group">
            <label className="input-label" htmlFor="email">EMAIL</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <button type="submit" className="primary-btn">SEND</button>
        </form>
      </div>
    </section>
  );
};

export default ForgotPasswordView;