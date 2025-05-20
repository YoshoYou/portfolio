import React from 'react'
import './Hero.css'
import { html, js, reactIcon, Aya, css, Aya_jouney_CV } from '../../assets/images/export';

function Hero() {
    return (
        <>
            <section className='hero-container' id='Home'>
                <div className="hero-content">
                    <h2>Building Digital Experiences That Inspire</h2>
                    <p>
                        Passionate Frontend Developer | Transforming Ideas into Seamless and
                        Visually Stunning Web Solutions
                    </p>
                    <div className="resume">
                        <button>
                            <a href={Aya_jouney_CV} download="">Download CV</a>
                        </button>
                    </div>
                </div>
                <div className="hero-img">
                    <div>
                        <div className="tech-icon">
                            <img src={reactIcon} alt="react-icon" />
                        </div>
                        <img src={Aya} alt="personal" />
                    </div>
                    <div>
                        <div className="tech-icon">
                            <img src={html} alt="" />
                        </div>
                        <div className="tech-icon">
                            <img src={js} alt="" />
                        </div>
                        <div className="tech-icon">
                            <img src={css} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            </>
    )
}
export default Hero