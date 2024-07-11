import React from 'react';
import './Contact.css'; // Import your CSS file for styling
import '@fortawesome/fontawesome-free/css/all.min.css';

const Contact = () => {
    return (

        <div className="contact-box">
            <h2>CONTACT</h2>
            <div className="contact-info">
                <div className="contact-details">
                    <p><i className="fas fa-phone"></i> +91 9739121134</p>
                    <p><i className="far fa-envelope"></i>jyothika139@gmail.com</p>
                </div>
                <div className="icon-container">
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"> <i className="fab fa-instagram"></i></a>
                    <a href="https://github.com/Jyothika083" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/jyothika-c-n-1a1266258?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                </div>
            </div>
        </div>
    );
};

export default Contact;

