import React from 'react'
import { Button, Container, Form, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap'

import { Link, NavLink } from 'react-router-dom';
function Nav() {
 
  return (
  <Container className='con'>
    <nav className="navbar navbar-expand-lg navbar-light ">
        
    <Link className="navbar-brand" to="/">
      <img src='./images/logo_vertical.svg' className='logo' alt='navbar-brand'/>
    </Link>
    <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="toggler-icon top-bar"></span>
        <span className="toggler-icon middle-bar"></span>
        <span className="toggler-icon bottom-bar"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
      <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Company
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="#">Team</Link></li>
            <li><Link className="dropdown-item" to="/career">Career</Link></li>
            <li><Link className="dropdown-item" to="#">Hosting Sites</Link></li>
            <li><Link className="dropdown-item" to="#">Types of works</Link></li>
            <li><Link className="dropdown-item" to="#">Payment Method</Link></li>

          </ul>
        </li>
      
        <li className="nav-item" data-aos="fade-left"  data-aos-delay="50">
          <NavLink className="nav-link" to="/Linkbout"  >About Us</NavLink>
        </li>
        <li className="nav-item" data-aos="fade-right"  data-aos-delay="100">
          <NavLink className="nav-link" to="/services" >Services</NavLink>
        </li>
     
        <li className="nav-item" data-aos="fade-left"  data-aos-delay="150">
          <NavLink className="nav-link " to="/contact" >Contact Us</NavLink>
        </li>
      </ul>
     
    </div>
    <button className='lang ' > <img src='./images/icons/lang.svg' alt=''/> English</button>
  </nav>
  </Container>
  )
}

export default Nav