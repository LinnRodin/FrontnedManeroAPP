import React from 'react'
import { NavLink } from 'react-router-dom'

const SignInView = () => {
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
      <form className="form"> 
        <div className="input-group">
          <label className="input-label" for="email">EMAIL</label>
            <input type="email" />
        </div>
        <div className="input-group">
          <label className="input-label" for="password">PASSWORD</label>
          <input type="password" />
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
        <NavLink to="/" className="primary-btn">SIGN IN</NavLink>
      </form>
      <div className="signin-link"> Don’t have an account? <NavLink to="/signup" className="link">Sign up.</NavLink>
    </div>
    <div className="social-icons">
      <a href="https://www.facebook.com" target="_blank" className="icon facebook"><i className="fab fa-facebook-f"></i></a>
      <a href="https://www.twitter.com" target="_blank" className="icon twitter"><i className="fa-brands fa-x-twitter"></i></a>
      <a href="https://www.google.com" target="_blank" className="icon google"><i className="fab fa-google"></i></a>
    </div>    
</div>
</section>
  )
}

export default SignInView