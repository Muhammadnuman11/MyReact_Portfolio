import React from 'react'
import Layout from '../../components/Layout'
import skillData from '../../Data/skillData'

export default function Skills() {
    
    let skills = skillData;

    return (
        <Layout>
            <div className="skills">
                <div className="container">
                    <div className="skillsBox">
                        <div className="skillsText">
                            <h2 className='topHeading'>Skills</h2>
                            <h1 className='mainHeading'>My Skills</h1>
                            <p className='mainPara'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                        </div>
                        <div className="skillsDetails">
                            {skills.map((skill, i) => {
                                return <div className="skillsDetailsBoxs" key={i}>
                                    <div className="skillName">
                                        <h1>{skill.skill}</h1>
                                    </div>
                                    <div className='skillCircle'>
                                        <svg viewBox="0 0 36 36" className="circular-chart">
                                            <path className="circle" strokeDasharray={skill.value+","+ 100} d="M18 2.0845
                                            a 15.9155 15.9155 0 0 1 0 31.831
                                        a 15.9155 15.9155 0 0 1 0 -31.831" />
                                        </svg>
                                        <div className="skillNumber">
                                            {skill.value}%
                                        </div>
                                    </div>
                                </div>
                            })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
