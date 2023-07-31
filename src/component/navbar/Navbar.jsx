import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/asset 0.png'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useState } from 'react'
import './navbar.css';
const Navlinks = () => {

      return (
            <div className="alllinks">

                  <ul className='flex'>
                        <li><Link className="linktag" to="">For Employers</Link></li>
                        <li><Link className="linktag" to="">Refers & Earn 15k</Link></li>
                        <li><Link className="linktag" to="">Login</Link></li>
                        <li><Link className="linktag" to="">Sign Up</Link></li>

                  </ul>
            </div>
      )
}
const Navbar = () => {
      const [showMenu, setShowMenu] = useState(false);
      const clickHandler = () => {
            setShowMenu(!showMenu)
      }
      return (
            <div className='navbar'>
                  <nav className='flex'>
                        <div className="logo">
                              <img src={logo} alt="" />
                        </div>
                   <span className='mobilemenu' onClick={clickHandler}><GiHamburgerMenu /></span>

                        
                        <Navlinks />
                  </nav>
                  <div className="mobile_menu">
                         {showMenu &&

                        <Navlinks />
                  }
                  </div>
                 
            </div>
      )
}

export default Navbar
