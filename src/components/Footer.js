import React from 'react'
import { BiSolidChevronRight, BiLogoLinkedin, BiLogoFacebook, BiLogoInstagram } from 'react-icons/bi';
import { BsFillMapFill, BsFillTelephoneFill } from 'react-icons/bs';
import { FaPaperPlane } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="footer-box">
            <div className="footer-items">
              <h1>About Me</h1>
              <p>I am an energetic, ambitious person who has developed a mature and responsible approach to any task that I undertake, or situation that I am presented with. I am excellent in working with others to achieve a certain objective on time and with excellence.</p>
              <button className='footer-btn'>Learn more</button>
            </div>
            <div className="footer-items">
              <h1>Links</h1>
              <ul>
                <li><BiSolidChevronRight className='arrowIcon' />
                  <Link to="/" className='footerLinks'>Home</Link>
                </li>
                <li><BiSolidChevronRight className='arrowIcon' />
                  <Link to="/about" className='footerLinks'>About</Link>
                </li>
                <li><BiSolidChevronRight className='arrowIcon' />
                  <Link to="/" className='footerLinks'>Services</Link>
                </li>
                <li><BiSolidChevronRight className='arrowIcon' />
                  <Link to="/" className='footerLinks'>Projects</Link>
                </li>
                <li><BiSolidChevronRight className='arrowIcon' />
                  <Link to="/" className='footerLinks'>Contact</Link>
                </li>
              </ul>
            </div>
            <div className="footer-items">
              <h1>Services</h1>
              <ul>
                <li><BiSolidChevronRight className='arrowIcon' />
                  <Link to="/" className='footerLinks'>Web Development</Link>
                </li>
                <li><BiSolidChevronRight className='arrowIcon' />
                  <Link to="/" className='footerLinks'>UX / UI Design</Link>
                </li>
                <li><BiSolidChevronRight className='arrowIcon' />
                  <Link to="/" className='footerLinks'>Ecommerce Websites</Link>
                </li>
                <li><BiSolidChevronRight className='arrowIcon' />
                  <Link to="/" className='footerLinks'>Web Application</Link>
                </li>
                <li><BiSolidChevronRight className='arrowIcon' />
                  <Link to="/" className='footerLinks'>Frontend Development</Link>
                </li>
              </ul>
            </div>
            <div className="footer-items">
              <h1>Have a Question?</h1>
              <ul>
                <li><BsFillMapFill className='fs-5 me-3' />Arifwala, Punjab Pakistan</li>
                <li><BsFillTelephoneFill className='fs-5 me-3' />+92 308 1062309</li>
                <li><FaPaperPlane className='fs-5 me-3' />numanirshad78@gmail.com</li>
              </ul>
              <div className="icons">
                <ul>
                  <li><BiLogoLinkedin className='fs-1 p-2' /></li>
                  <li><BiLogoFacebook className='fs-1 p-2' /></li>
                  <li><BiLogoInstagram className='fs-1 p-2' /></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-para">
            <p>Copyright © 2023 All rights reserved | This portfolio is made with ❤️  by Nomi</p>
          </div>
        </div>
      </div>
    </>
  )
}
