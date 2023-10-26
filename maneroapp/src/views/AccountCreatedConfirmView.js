import React from 'react'

const AccountCreatedConfirmView = () => {
  return (
<section className="confirme">
  <div className="container">
      <div className="logo"><img src="images/logo.png" alt="" /></div>
      <div className="image">
          <img src="/images/user.png" alt="key" />
      </div>
      <i className="fa-sharp fa-light fa-pipe"></i>
      <div className="action">Account Created!</div>
      <div className="description">Your account had beed created <br />successfully.</div>
      <a href="" className="primary-btn">SHOP NOW</a>
    </div>
</section>
  )
}

export default AccountCreatedConfirmView