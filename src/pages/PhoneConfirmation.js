import React, {useState} from 'react'
import {Link} from 'react-router-dom'

import style from '../style/phoneConfirm.module.css'

export default function PhoneConfirmation() {
  const [value, setValue] = useState();
  
  return (
    <div className={style.phoneConfirmContainer}>
      <h2>Enter your phone number</h2>
      <p>
       By entering your number you are agreeing to our terms {" "}
        <span>Terms of Service and Privacy Policy </span>
        Thank you.
      </p>
    </div>
  )
}