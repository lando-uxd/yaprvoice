import React from 'react'
import {Link} from 'react-router-dom'

import style from '../style/phoneConfirm.module.css'

export default function CodeConfirm(){
  return (
    <div className ={style.phoneConfirmContainer}>
      <div className='text-center'>
        <h1>Enter the code we just texted you</h1>
        <p>Didn't received the code? <span>Tap to resend</span></p>
      </div>
    </div>
  )
}