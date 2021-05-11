import React from 'react'
import style from "../style/welcome.module.css"

export default function Welcome() {
   return (
      <div className={style.WelcomeContainer}>
         <h2>Welcome!</h2>
         <div className={style.WelcomeInfo}>
            <p>
               We are working hard to get you something cool!
               You will get some great insight into other student opinions about learning.
               We will be adding more users overtime to make a full experience.
               You may also have the opportunity to make your own study groups.
            </p>
         </div>
      </div>
   )
}
