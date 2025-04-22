import React from 'react'
import './ContactMe.css'
import ContactInfoCard from './ContactInfoCard/ContactInfoCard';
import ContactForm from './ContactForm/ContactForm'
import { Git, gmail } from '../../assets/images/export';
export const ContactMe = () => {
    return (
        <section>
            <div className="contact-container" id='contact-me'>
                <h5>Contact Me</h5>
                <div className="contact-content">
                    <div style={ { flex: 1 } }>
                        <ContactInfoCard
                            iconUrl={gmail}
                            text="ayajouneyofficial@gmail.com"
                        />
                        <ContactInfoCard
                            iconUrl={Git}
                            text="github.com/YoshoYou"
                        />
                    </div>
                    <div style={ { flex: 1 } }>
                        <ContactForm/>
                    </div>
            </div>
            </div>
        </section>
    )
}
