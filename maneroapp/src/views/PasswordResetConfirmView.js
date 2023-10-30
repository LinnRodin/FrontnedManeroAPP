import React from 'react'
import Logo from "../assets/images/logo.png";
import Key from "../assets/images/key.png";
import { NavLink } from 'react-router-dom'

const PasswordResetConfirmView = () => {
  return (
<section className="confirme">
  <div className="container">
    <div className="logo"><img src={Logo} alt=""/></div>
    <div className="image">
        <img src={Key} alt="key" />
    </div>
    <i className="fa-sharp fa-light fa-pipe"></i>
    <div className="action">Your password has <br /> been reset!</div>
    <div className="description">Qui ex aute ipsum duis. Incididunt <br /> adipisicing voluptate laborum</div>
    <NavLink to="/" className="primary-btn">DONE</NavLink>
    </div>
</section>
  )
}

export default PasswordResetConfirmView