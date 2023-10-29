import React from 'react'

const ForgotPasswordView = () => {
  return (
<section className="forgot-password">
  <div className="container">
  <div className="topp-content">
      <a href=""><i className="fa-solid fa-less-than"></i></a>
      <div className="heading">Forgot password</div>
  </div>
  <div className="title">Please enter your email address. You will <br /> receive a link to create a new password via <br /> email.</div>
  <form className="form">
      <div className="input-group">
        <label className="input-label" for="email">EMAIL</label>
          <input type="email" />
      </div>
      <Navlink to="/" className="primary-btn">SEND</Navlink>
    </form>      
</div>
</section>
  )
}

export default ForgotPasswordView