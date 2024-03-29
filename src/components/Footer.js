import React from 'react'
import { BiSolidChevronRight, BiLogoLinkedin, BiLogoFacebook, BiLogoInstagram, BiLogoTwitter, BiLogoGithub, BiLogoMessenger } from 'react-icons/bi';
import { BsFillMapFill, BsFillTelephoneFill } from 'react-icons/bs';
import { FaPaperPlane } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

export default function Footer() {
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger animation only once
  });

  const openMessenger = () => {
    // window.location.href = ('https://m.me/nomii.23', '_blank')
    window.open('https://m.me/nomii.23', '_blank');
  }

  const years = new Date().getFullYear()

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
                  <a href="#home" className='footerLinks'>Home</a>
                </li>
                <li><BiSolidChevronRight className='arrowIcon' />
                  <a href="#about" className='footerLinks'>About</a>
                </li>
                <li><BiSolidChevronRight className='arrowIcon' />
                  <a href="#services" className='footerLinks'>Services</a>
                </li>
                <li><BiSolidChevronRight className='arrowIcon' />
                  <a href="#projects" className='footerLinks'>Projects</a>
                </li>
                <li><BiSolidChevronRight className='arrowIcon' />
                  <a href="#contact" className='footerLinks'>Contact</a>
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
              <div ref={ref}
                className={`icons animate__animated ${inView ? 'animate__fadeInUp' : ''}`}>
                <ul className='w-100'>
                  <li><BiLogoLinkedin className='fs-1 p-2' /></li>
                  <li><BiLogoFacebook className='fs-1 p-2' /></li>
                  <li><BiLogoInstagram className='fs-1 p-2' /></li>
                  <li><BiLogoTwitter className='fs-1 p-2' /></li>
                  <li><BiLogoGithub className='fs-1 p-2' /></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-para">
            <p>Copyright © {years} All rights reserved | This portfolio is made with ❤️  by Nomi</p>
          </div>

          <div className="messenger" onClick={openMessenger}>
            <BiLogoMessenger className='mIcon' />
          </div>

        </div>
      </div>
    </>
  )
}
