import React from 'react'

const PasswordResetView = () => {
  return (
<section className="reset-password">
  <div className="container">
  <div className="topp-content">
      <a href=""><i className="fa-solid fa-less-than"></i></a>
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
        <a href="" className="primary-btn">CHANGE PASSWORD</a>
      </form>      
  </div>
</section>
  )
}

export default PasswordResetView