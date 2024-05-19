import React from 'react'
import {softSkills }from '../../../assets/images/export'
import './SkillCard.css'
export const SkillCard = ({isActive,title,iconUrl,onClick}) => {
    return (
        <div className={ `skills-card ${ isActive ? "active" : "" }` }
            onClick={ () => onClick()}
        
        >
            <div className="skill-icon">
                <img src={softSkills} alt={title} />
            </div>
            <span>{title}</span>
        </div>
    )
}
