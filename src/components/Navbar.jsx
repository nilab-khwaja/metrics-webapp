import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faMicrophone } from '@fortawesome/free-solid-svg-icons';
import '../styles/navbar.css'

 const  Navbar = () =>{
  return (
    <nav>
        <h4>makeUp</h4>
        <div className='icons'>
            <FontAwesomeIcon icon = {faMicrophone} />
            <FontAwesomeIcon icon = {faGear} />
        </div>
    </nav>
  )
}

export default Navbar