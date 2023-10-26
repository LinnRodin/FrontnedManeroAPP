import React from 'react'

const PasswordResetConfirmView = () => {
  return (
<section className="confirme">
  <div className="container">
    <div className="logo"><img src="images/logo.png" alt=""/></div>
    <div className="image">
        <img src="/images/key.png" alt="key" />
    </div>
    <i className="fa-sharp fa-light fa-pipe"></i>
    <div className="action">Your password has <br /> been reset!</div>
    <div className="description">Qui ex aute ipsum duis. Incididunt <br /> adipisicing voluptate laborum</div>
    <a href="resetpassword.html" className="primary-btn">DONE</a>
    </div>
</section>
  )
}

export default PasswordResetConfirmView