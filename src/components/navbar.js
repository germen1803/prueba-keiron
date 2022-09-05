import React from "react";
import logo from '../images/logo.png'

function Navbar() {

  return (
    <nav>
      <div>
        <img src={ logo } alt="pokemon-logo" className="navbar-image"></img>
      </div>
    </nav>
  )

}

export default Navbar;