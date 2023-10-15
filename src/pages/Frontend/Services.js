import React from 'react'
import servicesData from '../../Data/servicesData';

export default function Services() {
  return (
    <div className="services" id='services'>
      <div className="container">
        <div className="servicesText">
          <h2 className='topHeading'>I AM GREAT AT</h2>
          <h1 className='mainHeading'>I do awesome services for my clients</h1>
          <p className='mainPara'>I offer MERN stack web development, responsive design, UI/UX, database configuration, server setup, React app development, and Node.js backend development.</p>
        </div>
        <div className="servicesBox">
          {servicesData.map((services, i) => {
            return <div className="box" key={i}>
              <div className="icon-box">
                {services.icon}
              </div>
              <div className="detail-box">
                <h3>
                  {services.name}
                </h3>
                <p className='mainPara text-start'>
                  {services.description}
                </p>
              </div>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}
