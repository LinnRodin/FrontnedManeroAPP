import React from 'react'
import { NavLink } from 'react-router-dom'

const SignUpView = () => {
  return (
    <section className="signupsection">
      <div className="container">
        <h6>Sign Up</h6>
        <div className="title">
          <i className="fa fa-pipe"></i>
          <h3>Sign Up</h3>
        </div>
        <form className="form">
          <div className="input-group">
            <label className="input-label" htmlFor="firstname">FIRSTNAME</label>
            <input type="text" id="firstname" />
          </div>
          <div className="input-group">
            <label className="input-label" htmlFor="lastname">LASTNAME</label>
            <input type="text" id="lastname" />
          </div>
          <div className="input-group">
            <label className="input-label" htmlFor="email">EMAIL</label>
            <input type="email" id="email" />
          </div>
          <div className="input-group">
            <label className="input-label" htmlFor="password">PASSWORD</label>
            <input type="password" id="password" />
          </div>
          <div className="input-group">
            <label className="input-label" htmlFor="confirmPassword">COMFIRM PASSWORD</label>
            <input type="password" id="confirmPassword" />
          </div>
          <NavLink to="/accountcreatedcomfirm" className="primary-btn">SIGN UP</NavLink>
        </form>
        <div className="signin-link">
          Already have an account? <NavLink to="signin" class="link">Sign In</NavLink>
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
