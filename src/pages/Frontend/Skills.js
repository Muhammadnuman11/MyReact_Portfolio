import React from 'react'
import skillData from '../../Data/skillData';
import { useInView } from 'react-intersection-observer';
import NumberCounter from '../../components/NumberCounter';

export default function Skills() {


    const [ref, inView] = useInView({
        triggerOnce: true, // Trigger animation only once
    });


    return (
        <div className="skills" id='skills'>
            <div className="container">
                <div className="skillsBox ">
                    <div className="skillsText">
                        <h2 className='topHeading'>Skills</h2>
                        <h1 className='mainHeading'>My Skills</h1>
                        <p className='mainPara'>MERN stack development, responsive web design, UI/UX, database design, server setup, React, Node.js, and more...</p>
                        {/* <div>
                            <NumberCounter initialNumber={0} targetNumber={78} />
                        </div> */}
                    </div>
                    <div
                        ref={ref}
                        className={` skillsDetails animate__animated ${inView ? 'animate__fadeInUp' : ''}`}>
                        {skillData.map((skill, i) => {
                            return <div className="skillsDetailsBoxs" key={i}>
                                <div className="skillName">
                                    <h1>{skill.skill}</h1>
                                </div>
                                <div className='skillCircle'>
                                    <svg viewBox="0 0 36 36" className="circular-chart">
                                        {/* <path className="circle" strokeDasharray={skill.value + "," + 100} d="M18 2.0845
                                            a 15.9155 15.9155 0 0 1 0 31.831
                                        a 15.9155 15.9155 0 0 1 0 -31.831" /> */}
                                        <path className={`circle ${inView ? 'circleAnimation' : ''}`} strokeDasharray={skill.value + "," + 100} d="M18 2.0845
                                            a 15.9155 15.9155 0 0 1 0 31.831
                                        a 15.9155 15.9155 0 0 1 0 -31.831" />
                                    </svg>
                                    <div className="skillNumber">
                                        {/* {skill.value}% */}
                                        <NumberCounter initialNumber={0} targetNumber={skill.value} />%
                                    </div>
                                </div>
                            </div>
                        })
                        }
                    </div>
                </div>
            </div>
        </div>
        // </Layout>
    )
}
