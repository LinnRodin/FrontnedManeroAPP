import React from 'react'
import { NavLink } from 'react-router-dom'

const VerifyPhoneView = () => {
  return (
<section className="verify-phone">
  <div className="container">
    <div className="topp-content">
        <NavLink to=""><i className="fa-solid fa-less-than"></i></NavLink>
        <div className="heading">Verify your phone number</div>
    </div>
    <form className="form">
        <div className="title">We have sent you an SMS with a code to <br /> number +17 0123456789.</div>
        <div className="input-group">
          <label className="input-label" for="phone-number">PHONE NUMBER</label>
          <div className="phone-input">
            <div className="flags">
                <i className="fa-duotone fa-flag-usa"></i>
            </div>
            <select>
                <option value="usa">+17</option>
                <option value="swe">+46</option>
            </select>
            <i className="fa-sharp fa-light fa-pipe"></i>
            <input type="text" id="phone-number" name="phone-number" placeholder="123456789" />
          </div>
        </div>
        <NavLink to="/" className="primary-btn">CONFIRM</NavLink>
      </form>
  </div>
</section>
  )
}

export default VerifyPhoneView