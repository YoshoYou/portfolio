import React from 'react'
import './WorkExperience.css'
import { WORK_EXPEIENCE } from '../../Utils/data';
import { ExperienceCard } from './ExperienceCard/ExperienceCard';
import { useRef } from 'react';
import Slider from 'react-slick';
export const WorkExperience = () =>
{
    const sliderRef = useRef();
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        sllideToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    sllideToScroll: 1,
                },
            },
        ],
    };
    const slideRight = () =>
    {
        sliderRef.current.slicNext();
    }
    const slideLeft = () =>
    {
        sliderRef.current.slicPrev();
    }
    return (
        <section className='experience-container'>
            <h5>WOrk Experience</h5>
            <div className="arrow-right" onClick={slideRight}>
                <span className="material-symbol-outlined">chevron_right</span>
            </div>
            <div className="arrow-left" onClick={slideLeft}>
                <span className="material-symbol-outlined">chevron_left</span>
            </div>
            <div className="experience-content">
                <Slider ref={ sliderRef } {...settings} >
                { WORK_EXPEIENCE.map( ( item ) => (
                    <ExperienceCard key={item.title} details={item} />
                ) ) }
                    </Slider>
            </div>
        </section>
    )
}
