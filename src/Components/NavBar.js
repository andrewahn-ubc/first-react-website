import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import './NavBar.css';
import { Button } from '../Subcomponents/Button';


function NavBar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false)
    } else {
      setButton(true)
    }
  };

  useEffect(() => {
    showButton()
  }, []) 

  window.addEventListener('resize', showButton);

  return (
    <>
        <nav className="NavBar">
            <div className="navbar-container">

              <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                Andrew Ahn
                <i className="fa-regular fa-face-smile-wink" />
              </Link>

              <div className="menu-icon" onClick={handleClick}>
                <i className={click ? "fas fa-times" : "fas fa-bars"} />
              </div>

              <ul className={click ? "nav-menu.active" : "nav-menu"}>
                <li className="nav-item">
                  <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                    Home
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to='/resume' className="nav-links" onClick={closeMobileMenu}>
                    Resume
                  </Link>
                </li>

              </ul>
            </div>
        </nav>
    </>
  )
}

export default NavBar
