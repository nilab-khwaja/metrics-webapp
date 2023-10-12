import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faGear, faMicrophone } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';
import '../styles/navbar.css';
import logo from '../assests/logo1.png';

const Navbar = () => {
  const location = useLocation(); // Get the current location

  return (
    <nav>
      <div className="back-logo">
        {location.pathname !== '/' && (
        <Link to="/">
          <FontAwesomeIcon icon={faArrowLeft} className="goBack" />
        </Link>
        )}
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="icons">
        <FontAwesomeIcon icon={faMicrophone} />
        <FontAwesomeIcon icon={faGear} />
      </div>
    </nav>
  );
};

export default Navbar;
