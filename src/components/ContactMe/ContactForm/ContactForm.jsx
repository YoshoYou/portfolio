import React, { useState } from 'react'
import './ContactForm.css'
import emailjs from 'emailjs-com'
const ContactMe = () =>
{
    const [ formData, setFormData ] = useState( {
        name: '',
        email: '',
        message: ''
    } );
    const [ isLoading, setIsLoading ] = useState( false );
    const [ notification, setNotification ] = useState( null );
    const SERVICE_ID = 'service_6xc6a01';
    const TEMPLATE_ID = 'template_1qs0jir'; 
    const USER_ID = 'HZi5mGL_TMvVe-agp';
    const MY_EMAIL = 'ayajouneyofficial@gmail.com';

    const handleChange = ( e ) =>
    {
        const { name, value } = e.target;
        setFormData( prev => ( { ...prev, [ name ]: value } ))
    };

    const handleSubmit = async( e ) =>
    {
        e.preventDefault();
        setIsLoading( true );

        try
        {
            await emailjs.send(
                SERVICE_ID,
                TEMPLATE_ID,
                {
                    from_name: formData.name,
                    from_email:formData.email,
                    to_email: MY_EMAIL,
                    reply_to:formData.email,
                    message: formData.message,
                    date: new Date().toLocaleDateString()
                },
                USER_ID,
            );
            console.log(formData.email);
            setNotification( {
                type: 'success',
                messgae: "Your Message has been sent successfully"
            } );
            setFormData( { name: '', email: '', message: '' } );
        }
        catch (error)
        {
            setNotification( {
                type: 'error',
                message: 'An error accure while sending your message, please try again later...'
            } );
        }
        finally
        {
            setIsLoading(false );
        }
    };
    return (
        <div className="contact-form-content">
            { notification && (
                <div className={ `alert ${ notification.type }` }>
                    {notification.message}
                </div>
            )}
            <form onSubmit={handleSubmit}>
                <div className="name-container">
                <input type="text" name='name' value={formData.name} onChange={handleChange} placeholder='Enter Your Full Name' required />
                    {/* <input type="text" name='lastname' placeholder='Last Name' /> */}
                </div>
                <input type="email" name='email' value={formData.email} onChange={handleChange} placeholder='user@domain.com' required />
                <textarea name="message" type="text" value={formData.message} onChange={handleChange} placeholder='Write Your Message Here' required></textarea>
                <button type='submit' disabled={isLoading}>
                    { isLoading ? ' Is Sending...' : 'Send' }
                </button>
            </form>
        </div>
    )
}

export default ContactMe