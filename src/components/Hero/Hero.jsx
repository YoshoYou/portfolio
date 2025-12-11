import React from 'react'
import './Hero.css'
import { html, js, reactIcon, Aya, css, Aya_jouney_CV, aya } from '../../assets/images/export';

function Hero() {
    return (
        <>
            <section className='hero-container' id='Home'>
                <div className="hero-content">
                    <h2>Building Digital Experiences That Inspire</h2>
                    <p>
                       I'm a passionate Front-End Developer with a strong focus on creating clean, responsive,
                        and user-friendly web interfaces. I specialize in turning ideas and designs into fully functional digital experiences using modern technologies
                        like HTML, CSS, JavaScript, React, and Tailwind CSS. With a keen eye for detail and a dedication to writing maintainable, efficient code,
                        I strive to build products that not only look great but also perform flawlessly across all devices.
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
                        <img src={aya} alt="personal" />
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