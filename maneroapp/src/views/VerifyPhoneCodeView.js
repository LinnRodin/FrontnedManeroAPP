import React from 'react'

const VerifyPhoneCodeView = () => {
  return (
<section className="verify-code">
  <div className="container">
    <div className="topp-content">
      <a href=""><i className="fa-solid fa-less-than"></i></a>
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
          <a href="" className="info">Didn’t receive the OTP? Resend.</a>
          <a href="" className="primary-btn">VERIFY</a>
      </form>
  </div>
</section>
  )
}

export default VerifyPhoneCodeView