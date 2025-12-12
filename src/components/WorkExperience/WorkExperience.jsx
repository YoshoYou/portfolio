import './WorkExperience.css'
import { WORK_EXPEIENCE } from '../../Utils/data';
import { ExperienceCard } from './ExperienceCard/ExperienceCard.jsx';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from 'react-slick';
export const WorkExperience = () =>
{
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 2,
        centerMode: true,   
        centerPadding: '0px',
        centerMargin: '0px',
        sllidesToScroll: 1,
        arrows: true,
        responsive:  [
            {
                breakpoint: 1285,
                settings : {
                    slidesToShow: 1,
                }
            }
        ]
    };
    
    return (
        <section className='experience-container' id='Experiences'>
            <h5>Work Experience</h5>
            <div className="experience-content">
                <Slider  {...settings} >
                { WORK_EXPEIENCE.map( ( item ) => (
                    <ExperienceCard key={item.title} details={item} />
                ) ) }
                    </Slider>
            </div>
        </section>
    )
}
