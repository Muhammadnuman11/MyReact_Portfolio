import React from 'react'
import { FaCode } from 'react-icons/fa'

export default function Services() {
  return (
    <div className="services" id='services'>
      <div className="container">
        <div className="servicesText">
          <h2 className='topHeading'>I AM GRAT AT</h2>
          <h1 className='mainHeading'>We do awesome services for our clients</h1>
          <p className='mainPara'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
        </div>
        <div className="servicesBox">
          <div className="box">
            <div className="icon-box">
              <FaCode />
            </div>
            <div className="detail-box">
              <h4>
                Web App Development
              </h4>
              <p>
                A web application is an interactive program that runs on a web server and is accessed through a web browser.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
