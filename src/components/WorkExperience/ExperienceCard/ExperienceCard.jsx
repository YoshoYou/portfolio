import './ExperienceCard.css'
export const ExperienceCard = ({details}) => {
    return (
        <div className='work-experience-card'>
            <h6>{ details.title }</h6>
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