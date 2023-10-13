import React from 'react'

export default function HomeComponent({ topHeading, mainHeading, mainPara }) {
    return (
        <div className="home" id="home">
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="h-100">
                            <div className="homeContent">
                                <div className='homeArrow'></div>
                            </div>
                            <div className="contentCenter">
                                <h3 className='topHeading text-start'>{topHeading}</h3>
                                <h1 className='mainHeading text-start'>{mainHeading}</h1>
                                <p className="mainPara text-start">{mainPara}</p>
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
                                <h3 className='topHeading text-start'>{topHeading}</h3>
                                <h1 className='mainHeading text-start'>{mainHeading}</h1>
                                <p className="mainPara text-start">{mainPara}</p>
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
    )
}
