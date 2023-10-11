import React from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { FaHome, FaInfoCircle, FaPhone, FaCode, FaBriefcase, FaTools, FaBook } from 'react-icons/fa';


export default function Header() {

  var givenClass = "bg-transperent";
  var colorClass;
  const link = useLocation().pathname;
  if (link === "/") {
    givenClass = "bgDark"
    colorClass = "textLight"
  } else {
    colorClass = "textDark"
    givenClass = "bgLight"
  }


  return (
    <>
      <nav className={`navbar  navbar-expand-lg  ${givenClass}`} id='navbar'>
        <div className="container">
          <div className="nav-logo">
            <Link to='/' className={`navbar-brand logo ${colorClass}`}>NOMI<span>.</span></Link>
            <button className="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01">
              <span className="p-2 menuIcon">MENU</span>
            </button>
          </div>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item my-3">
                <NavLink to='/' className={`nav-link ${colorClass}`}>Home
                  <span><FaHome /> </span>
                </NavLink>
              </li>
              <li className="nav-item my-3">
                <NavLink to='/about' className={`nav-link ${colorClass}`}>About
                  <span><FaInfoCircle /> </span>
                </NavLink>
              </li>
              <li className="nav-item my-3">
                <NavLink to='/skills' className={`nav-link ${colorClass}`}>Skills
                  <span><FaCode /> </span>
                </NavLink>
              </li>
              <li className="nav-item my-3">
                <NavLink to='/Services' className={`nav-link ${colorClass}`}>Services
                  <span><FaTools /> </span>
                </NavLink>
              </li>
              <li className="nav-item my-3">
                <NavLink to='/projects' className={`nav-link ${colorClass}`}>Projects
                  <span><FaBriefcase /> </span>
                </NavLink>
              </li>
              <li className="nav-item my-3">
                <NavLink to='/blog' className={`nav-link ${colorClass}`}>Blog
                  <span><FaBook /> </span>
                </NavLink>
              </li>
              <li className="nav-item my-3">
                <NavLink to='/contact' className={`nav-link ${colorClass}`}>Contact
                  <span><FaPhone /> </span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav >
    </>
  )
}
