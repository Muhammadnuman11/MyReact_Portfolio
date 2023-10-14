import React from 'react'
import { CgWebsite } from 'react-icons/cg'
import { BsBoxes } from 'react-icons/bs'
import { HiOutlineShoppingBag } from 'react-icons/hi'

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
              <CgWebsite />
            </div>
            <div className="detail-box">
              <h3>
                Web App Development
              </h3>
              <p className='mainPara text-start'>
                A web application is an interactive program that runs on a web server and is accessed through a web browser.
              </p>
            </div>
          </div>
          <div className="box">
            <div className="icon-box">
              <BsBoxes />
            </div>
            <div className="detail-box">
              <h3>
                Responsive Web Application
              </h3>
              <p className='mainPara text-start'>
                A web application is an interactive program that runs on a web server and is accessed through a web browser.
              </p>
            </div>
          </div>
          <div className="box">
            <div className="icon-box">
              <HiOutlineShoppingBag />
            </div>
            <div className="detail-box">
              <h3>
                Ecommerce Web Application
              </h3>
              <p className='mainPara text-start'>
                A web application is an interactive program that runs on a web server and is accessed through a web browser.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
