import React from 'react'
import { NavLink } from 'react-router-dom'

const ForgotPasswordView = () => {
  return (
<section className="forgot-password">
  <div className="container">
  <div className="topp-content">
      <NavLink to=""><i className="fa-solid fa-less-than"></i></NavLink>
      <div className="heading">Forgot password</div>
  </div>
  <div className="title">Please enter your email address. You will <br /> receive a link to create a new password via <br /> email.</div>
  <form className="form">
      <div className="input-group">
        <label className="input-label" for="email">EMAIL</label>
          <input type="email" />
      </div>
      <NavLink to="/" className="primary-btn">SEND</NavLink>
    </form>      
</div>
</section>
  )
}

export default ForgotPasswordView