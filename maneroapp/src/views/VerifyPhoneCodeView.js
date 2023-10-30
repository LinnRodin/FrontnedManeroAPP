import React from 'react'
import { NavLink } from 'react-router-dom'

const VerifyPhoneCodeView = () => {
  return (
<section className="verify-code">
  <div className="container">
    <div className="topp-content">
      <div className="heading">Verify your phone number</div>
      </div>
      <div className="title">Enter your OTP code here.</div>
      <form className="form-verify">
          <div className="form-group">
              <div className="code-input">
                  <input type="number" />
              </div>
              <div className="code-input">
                  <input type="number" />
              </div>
              <div className="code-input">
                  <input type="number" />
              </div>
              <div className="code-input">
                  <input type="number" />
              </div>
              <div className="code-input">
                  <input type="number" />
              </div>
          </div>
          <NavLink to="/" className="info">Didn’t receive the OTP? Resend.</NavLink>
          <NavLink to="/" className="primary-btn">VERIFY</NavLink>
      </form>
  </div>
</section>
  )
}

export default VerifyPhoneCodeView