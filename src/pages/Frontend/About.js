import React from 'react'
// import Layout from '../../components/Layout'

export default function About() {

    return (
        // <Layout>
            <div className="about" id="about">
                <div className="container">
                    <div className="aboutBox">
                        <div className="aboutImg">
                            <img src="/images/about.jpg" alt="" />
                        </div>
                        <div className="aboutContent">
                            <h3 className='topHeading aboutText'>MY INTRO</h3>
                            <h1 className="mainHeading aboutText">About Me</h1>
                            <p className="mainPara aboutText">I am an energetic, ambitious person who has developed a mature and responsible approach to any task that I undertake, or situation that I am presented with. I am excellent in working with others to achieve a certain objective on time and with excellence.</p>

                            <div className="detail">
                                <span className='identity'>Name:</span>
                                <span className='value'>Numan Irshad</span>
                            </div>
                            <div className="detail">
                                <span className='identity'>DateOfBirth:</span>
                                <span className='value'>May 01, 2001</span>
                            </div>
                            <div className="detail">
                                <span className='identity'>Address:</span>
                                <span className='value'>Arifwala Punjab, Pakistan</span>
                            </div>
                            <div className="detail">
                                <span className='identity'>Zip code:</span>
                                <span className='value'>57450</span>
                            </div>
                            <div className="detail">
                                <span className='identity'>Email:</span>
                                <span className='value'>numanirshad78@gmail.com</span>
                            </div>
                            <div className="detail">
                                <span className='identity'>Phone:</span>
                                <span className='value'>+92 308 1062309</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        // </Layout>
    )
}
