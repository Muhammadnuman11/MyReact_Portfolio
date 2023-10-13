import React from 'react'
import { useLocation } from 'react-router-dom'
import { FaHome, FaInfoCircle, FaPhone, FaCode, FaBriefcase, FaTools, FaBook } from 'react-icons/fa';


export default function Header() {

  var givenClass = "bg-transperent";
  var colorClass;
  const link = useLocation().hash;
  if (link === "#home") {
    givenClass = "bgDark"
    colorClass = "textLight"
  } else {
    colorClass = "textDark"
    givenClass = "bgLight"
  }
  var homeClass; var aboutClass; var skillClass; var serviceClass;
  var projectClass; var blogClass; var contactClass;
  if (link === "#home") {
    homeClass = "active"
  } else if (link === "#about") {
    aboutClass = "active"
  } else if (link === "#skills") {
    skillClass = "active"
  } else if (link === "#services") {
    serviceClass = "active"
  } else if (link === "#projects") {
    projectClass = "active"
  } else if (link === "#blog") {
    blogClass = "active"
  } else if(link === "#contact") {
    contactClass = "active"
  }


  return (
    <>
      <nav className={`navbar  navbar-expand-lg  ${givenClass}`} id='navbar'>
        <div className="container">
          <div className="nav-logo">
            <a href='#home' className={`navbar-brand logo ${colorClass}`}>NOMI<span>.</span></a>
            <button className="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01">
              <span className="p-2 menuIcon">MENU</span>
            </button>
          </div>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item my-3">
                <a href='#home' className={`nav-link ${colorClass} ${homeClass}`}>Home
                  <span><FaHome /> </span>
                </a>
              </li>
              <li className="nav-item my-3">
                <a href='#about' className={`nav-link ${colorClass} ${aboutClass}`}>About
                  <span><FaInfoCircle /> </span>
                </a>
              </li>
              <li className="nav-item my-3">
                <a href='#skills' className={`nav-link ${colorClass}  ${skillClass}`}>Skills
                  <span><FaCode /> </span>
                </a>
              </li>
              <li className="nav-item my-3">
                <a href='#services' className={`nav-link ${colorClass}  ${serviceClass}`}>Services
                  <span><FaTools /> </span>
                </a>
              </li>
              <li className="nav-item my-3">
                <a href='#projects' className={`nav-link ${colorClass} ${projectClass}`}>Projects
                  <span><FaBriefcase /> </span>
                </a>
              </li>
              <li className="nav-item my-3">
                <a href='#blog' className={`nav-link ${colorClass}  ${blogClass}`}>Blog
                  <span><FaBook /> </span>
                </a>
              </li>
              <li className="nav-item my-3">
                <a href='#contact' className={`nav-link ${colorClass}  ${contactClass}`}>Contact
                  <span><FaPhone /> </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav >
    </>
  )
}
