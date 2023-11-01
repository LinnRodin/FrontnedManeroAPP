import React from 'react'
import { NavLink } from 'react-router-dom'


const PasswordResetView = () => {
  return (
<section className="reset-password">
  <div className="container">
  <div className="topp-content">
      <div className="heading">Reset password</div>
    </div>
    <div className="title">Enter new password and confirm.</div>
    <form className="form">
        <div className="input-group">
            <label className="input-label" for="password">NEW PASSWORD</label>
             <input type="password" />
        </div>
        <div className="input-group">
            <label className="input-label" for="password">CONFIRM PASSWORD</label>
             <input type="password" />
        </div>
        <NavLink to="/passwordcomfirm" className="primary-btn">CHANGE PASSWORD</NavLink>
      </form>      
  </div>
</section>
  )
}

export default PasswordResetView