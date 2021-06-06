import React, {useState} from 'react'
import PhoneInput from 'react-phone-number-input';
import {Link} from 'react-router-dom'

import style from '../style/phoneConfirm.module.css'

export default function PhoneConfirmation() {
  const [value, setValue] = useState();
  
  return (
    <div className={style.phoneConfirmContainer}>
      <Link exact to="/" className={style.backBtn}>
        <img src="https://cdn.glitch.com/75ae7b0f-b642-4988-b357-4b94abdceffb%2Farrow.png?v=1621452711274" alt="back arrow" />
      </Link>
      <h2>Enter your phone number</h2>
      <PhoneInput international defaultCountry='US' value={value} onChange={setValue}>

      </PhoneInput>
      <p>
       By entering your number you are agreeing to our terms {" "}
        <span>Terms of Service and Privacy Policy </span>
        Thank you.
      </p>
      <Link exact to='/code_confirm' className="d-flex align-items-center primaryBtn">
        Next <img src="https://cdn.glitch.com/75ae7b0f-b642-4988-b357-4b94abdceffb%2Fnext-arrow.png?v=1621868980472" alt="next"
              className="ml-1" height="20px" />
      </Link>
    </div>
  )
} 