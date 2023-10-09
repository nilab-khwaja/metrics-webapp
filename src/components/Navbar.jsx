import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faMicrophone } from '@fortawesome/free-solid-svg-icons';
import '../styles/navbar.css';
import logo from  '../assests/logo.webp'

 const  Navbar = () =>{
  return (
    <nav>
        <img src={logo} width={100} className='logo'/>
        <div className='icons'>
            <FontAwesomeIcon icon = {faMicrophone} />
            <FontAwesomeIcon icon = {faGear} />
        </div>
    </nav>
  )
}

export default Navbar