import React from 'react'

const VerifyPhoneCodeView = () => {
  return (
<section className="verify-code">
  <div className="container">
    <div className="topp-content">
      <Navlink to=""><i className="fa-solid fa-less-than"></i></Navlink>
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
          <Navlink to="/" className="info">Didn’t receive the OTP? Resend.</Navlink>
          <Navlink to="/" className="primary-btn">VERIFY</Navlink>
      </form>
  </div>
</section>
  )
}

export default VerifyPhoneCodeView