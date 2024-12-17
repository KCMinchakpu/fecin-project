import React, {useState} from 'react';
import './navbar.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/fecin-logo.png';
import './navbar.css';

const Menu = () => (
  <>
  <p><a href="#home">Home</a></p>
          <p><a href="#aboutus">About Us</a></p>
          <p><a href="#whatwedo">What We Do</a></p>
          <p><a href="#translations">Bible Translation</a></p>
          <p><a href="#blog">Articles</a></p>
  </>
)


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <div className="fecin__navbar">
      <div className="fecin__navbar-links">
        <div className="fecin__navbar-links_logo">
          <img  src={logo} alt="Fecin Logo" />
        </div>
        <div className="fecin__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="fecin__navbar-sign">
        <p>Sign In</p>
        <button type="button">Sign Up</button>
      </div>
      <div className="fecin__navbar-menu">
      {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="fecin__navbar-menu_container-links">
          <Menu />
          <div className="gpt3__navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
          </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar