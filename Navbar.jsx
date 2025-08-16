import React from 'react'
import { Link } from 'react-router'
import "./style.css"
const Navbar = () => {
  return (
    <div>
        <Link to="/" className="nav-links"><h1>Home</h1></Link>
        <Link to="/about" className="nav-links"><h1>About</h1></Link>
        <Link to="/login" className="nav-links"><h1>Login</h1></Link>
    </div>
  )
}

export default Navbar
