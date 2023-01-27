import ContactForm from './ContactForm';
import MediaQuery from 'react-responsive';
import './index.css';
import { AiOutlineMail, AiFillLinkedin, AiOutlinePhone } from 'react-icons/ai';

function Contact () {
    return (
        <div className="main-contact">
            <div className="contact-side">
                <h2 className="contact-text">Contato</h2>
                <ContactForm />
            </div>
            <div className="contact-right">
                <a href="https://www.linkedin.com/in/lucasreis30/" target="_blank" rel="noreferrer" style={{textDecoration: 'none'}}>
                    <div className="contact-container">
                            <AiFillLinkedin className="contact-icon" />
                            <h2 className="contact-label">Lucas Reis</h2>
                    </div>
                </a>
                    <div className="contact-container">
                            <AiOutlineMail className="contact-icon" />
                            <h2 className="contact-label">lucasreisribeiro97@gmail.com</h2>
                    </div>
                    <div className="contact-container">
                            <AiOutlinePhone className="contact-icon" />
                            <h2 className="contact-label">(62) 99870-2515</h2>
                    </div>
            </div>
        </div>
    )
}

export default Contact
