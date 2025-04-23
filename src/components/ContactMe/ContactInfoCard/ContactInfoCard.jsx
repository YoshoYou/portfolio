import React from 'react'
import './ContactInfoCard.css'
const ContactInfoCard = ({iconUrl,text,hLocation}) => {
    return (
        <div className="contact-details-card">
            <div className="icon">
                <img src={iconUrl} alt="text" />
            </div>
            <a href  onClick={(e)=>{
                window.open(`${hLocation}`);
                e.preventDefault();
            } } >{ text }</a>
        </div>
    )
}

export default ContactInfoCard