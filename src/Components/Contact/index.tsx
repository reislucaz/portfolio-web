import ContactForm from './ContactForm'
import { CiLinkedin } from 'react-icons/ci'
import MediaQuery from 'react-responsive'
import './index.css'

function Contact () {
    return (
        <div className="main-contact">
            <div className="contact-side">
                <h2 className="contact-text">Contato</h2>
                <ContactForm />
            </div>
            <MediaQuery minWidth={800}>
                <a id="contact-link" href="https://www.linkedin.com/in/lucasreis30/" target="_blank">
                    <CiLinkedin id="contact-img"/>
                </a>
            </MediaQuery>
        </div>
    )
}

export default Contact
