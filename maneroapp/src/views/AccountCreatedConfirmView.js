import React from 'react'
import Logo from "../assets/images/logo.png";
import User from "../assets/images/user.png";
import { NavLink } from 'react-router-dom'


const AccountCreatedConfirmView = () => {
  return (
<section className="confirme">
  <div className="container">
      <div className="logo"><img src={Logo} alt="" /></div>
      <div className="image">
          <img src={User} alt="key" />
      </div>
      <i className="fa-sharp fa-light fa-pipe"></i>
      <div className="action">Account Created!</div>
      <div className="description">Your account had beed created <br />successfully.</div>
      <NavLink to="/" className="primary-btn">SHOP NOW</NavLink>
    </div>
</section>
  )
}

export default AccountCreatedConfirmView