import React from 'react'
import "../styles/about_navbar.css"
import { Link } from 'react-router-dom';

const about_navbar = () => {
  return (
    <div className='about_navbar'>
      <div id='about_navbar_items'>
        <Link to="/" className='about_navbar_link'>Home</Link>
        <Link to="/about" className='about_navbar_link'>About</Link> 
        <Link to="/" className='about_navbar_link'>Hm store</Link>
        <Link to="/contact" className='about_navbar_link'>Contact Us</Link>
        <Link to="/" className='about_navbar_link'>Search</Link>
        {/* <Link to="/login" className='about_navbar_link'>login</Link> */}
       
        
      </div>
    </div>
  )
}

export default about_navbar