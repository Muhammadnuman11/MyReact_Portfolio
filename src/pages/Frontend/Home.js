import React from 'react'
import Layout from '../../components/Layout'

export default function Home() {
  return (
    <Layout>
      {/* Home */}
      <div className="home" id="home">
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="h-100">
                <div className="homeContent">
                  <div className='homeArrow'></div>
                </div>
                <div className="contentCenter">
                  <h3 className='topHeading text-start'>Hello! This is Nomi</h3>
                  <h1>Creative <span>UI/UX</span> Web Designer & Developer</h1>
                  <div className="buttons">
                    <button className='btn hireMe'>Hire me</button>
                    <button className='btn downloadCV'>Download CV</button>
                  </div>
                </div>
                <div className="imageCenter">
                  <div className="homeCarousel">
                    <img src='/images/bg2.jpg' alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="h-100">
                <div className="homeContent">
                  <div className='homeArrow'></div>
                </div>
                <div className="contentCenter">
                  <h3 className='topHeading text-start'>We design & build brand websites</h3>
                  <h1>Hi, I am  <span>Nomi</span> This is my favorite work.</h1>
                  <div className="buttons">
                    <button className='btn hireMe'>Hire me</button>
                    <button className='btn downloadCV'>Download CV</button>
                  </div>
                </div>
                <div className="imageCenter">
                  <div className="homeCarousel">
                    <img src='/images/bg1.jpg' alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About
      <About /> */}
      
    </Layout>
  )
}
