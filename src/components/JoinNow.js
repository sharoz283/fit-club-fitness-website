import React from 'react'
import {Link} from 'react-scroll'

export default function JoinNow() {
  return (
    <div>
      <button className="header-join-button"><Link to="join-us" className="nav-link" spy={true} smooth={true} offset={50} duration={500}>Join Now</Link></button>
    </div>
  )
}
