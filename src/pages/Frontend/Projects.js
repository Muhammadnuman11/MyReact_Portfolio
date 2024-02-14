import React from 'react'
import { useInView } from 'react-intersection-observer';
import projectsData from '../../Data/projectsData';

export default function Projects() {

    const [ref, inView] = useInView({
        triggerOnce: true, // Trigger animation only once
    });
    // console.log(ref.apply, inView)

    return (
        <div className="projects" id='projects'>
            <div className="container">
                <div className="projectText">
                    <h2 className='topHeading'>ACCOMPLISHMENTS</h2>
                    <h1 className='mainHeading'>Our Projects</h1>
                    <p className='mainPara'>My Project Complete.</p>
                </div>
                <div ref={ref}
                    className={` projectsBox animate__animated ${inView ? 'animate__fadeInUp' : ''}`}>
                    {projectsData.map((projects, i) => {
                        return <div className="box" key={i}>
                            {projects.link ?
                                <a href={projects.link} target='_blank' rel="noreferrer" >
                                    <img src={projects.img} alt="" />
                                </a> :

                                projects.img ?
                                    <img src={projects.img} alt="" />
                                    :
                                    <video src={projects.video} controls></video>

                            }
                            <div className="detail-box">
                                <h3>
                                    {projects.name}
                                </h3>
                                <p className='mainPara text-start'>
                                    {projects.description}
                                </p>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}
