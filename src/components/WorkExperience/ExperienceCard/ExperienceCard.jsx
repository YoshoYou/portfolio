import './ExperienceCard.css'
import { MdOutlineArrowOutward } from "react-icons/md";
export const ExperienceCard = ({details}) => {
    return (
        <div className='work-experience-card'>
            <h6>{ details.title }</h6>
            <span><a href={`mailto:${details.compEmail}`}> {details.compEmail} <MdOutlineArrowOutward   size={22}/></a></span>
            <span>{details.date}</span>
            <span>{details.info}</span>
            <ul>
                { details.responsabilites.map( ( item ) =>
                (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    )
}