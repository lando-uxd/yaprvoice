import React from 'react'
import {Link} from 'react-router-dom'

import style from "../style/welcome.module.css"

export default function Welcome() {
  return (
    <div className={style.WelcomeContainer}>
      <h2>Welcome!</h2>
      <div className={style.WelcomeInfo}>
        <p>
          We are working hard to get you something cool! You will get some great
          insight into other student opinions about learning. We will be adding
          more users overtime to make a full experience. You may also have the
          opportunity to make your own study groups.
        </p>
        <p>
          People can join by invitation only, preferably to exchange information
          with other students. You may be or not at a school or study on your
          own, as long as you follow common courtesy you are welcome. Be nice,
          get smarter, enjoy your studies!
        </p>
        <p>Thanks from the one person team Lando!</p>
      </div>
      <div className={style.actionBtn}>
        <Link
          exact
          to="get_username"
          className="primaryBtn d-flex align-items-center mb-3"
        >
          Get your username{" "}
        </Link>
        <Link>Have an invite link? Sign in</Link>
      </div>
    </div>
  )
}
