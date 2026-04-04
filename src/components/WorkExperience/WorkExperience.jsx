import './WorkExperience.css'
import { WORK_EXPEIENCE, WORK_EXPERIENCE } from '../../Utils/data';
import { ExperienceCard } from './ExperienceCard/ExperienceCard.jsx';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from 'react-slick';
export const WorkExperience = () =>
{
    
    return (
        <section className='experience-container' id='Experiences'>
            <h5>Work Experience</h5>
            <div className="experience-content">
                {WORK_EXPERIENCE.map(ex=>(

                    <ExperienceCard key={ex.title} details={ex} />

                ))}
            </div>
        </section>
    )
}
