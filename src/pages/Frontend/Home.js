import React from 'react'
import Layout from '../../components/Layout'
import About from './About'
import Skills from './Skills'
import CV from '../../assets/files/NomiCV.pdf'
import { TypeAnimation } from 'react-type-animation'
import Services from './Services'
import Projects from './Projects'
import Contact from './Contact'

export default function Home() {

  return (
    <Layout>
      {/* Home */}
      <div className="home" id="home" data-index='0'>
        <div></div>
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="h-100">
                <div className="homeContent">
                  <div className='homeArrow'></div>
                </div>
                <div className="contentCenter animate__animated animate__fadeInUp">
                  <h1>
                    <span>Hi, I am</span>
                    Numan Irshad
                  </h1>
                  {/* <h3 className='topHeading text-start'> */}
                  <TypeAnimation
                    sequence={[
                      "I'm a SOFTWARE ENGINEER",
                      1000,
                      "I'm a MERN STACK DEVELOPER",
                      1000,
                      "I'm a FRONTEND DEVELOPER",
                      1000,
                      "I'm a WEBSITE DEVELOPER",
                      1000,
                    ]}
                    wrapper="p"
                    speed={50}
                    style={{ color: '#B1B493', fontSize: "24px", marginBottom: '20px', fontWeight: "900", letterSpacing: "2px" }}
                    repeat={Infinity}
                  />
                  {/* Software Engineer | MERN Developer | Website Developer */}
                  {/* </h3> */}
                  <div className="buttons">
                    <button className='btn hireMe'>Hire me</button>
                    <a href={CV} download="NomiCV" rel="noreferrer" target='_blank'>
                      <button className='btn downloadCV'>Download CV</button>
                    </a>
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
                <div className="contentCenter animate__animated animate__fadeInUp">
                  <h3 className='topHeading text-start'>I design & build brand websites</h3>
                  <h1><span>Hi, I am</span> Nomi<span className='d-inline-block fs-1'>.</span></h1>
                  <h2>This is my Portfolio.</h2>
                  <div className="buttons">
                    <button className='btn hireMe'>Hire me</button>
                    <a href={CV} download="NomiCV" rel="noreferrer" target='_blank'>
                      <button className='btn downloadCV'>Download CV</button>
                    </a>
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

      {/* About  */}
      <About/>

      {/* Skills */}
      <Skills />

      {/* Services */}
      <Services />

      {/* Projects */}
      <Projects />

      {/* Contact */}
      <Contact />

    </Layout>
  )
}

