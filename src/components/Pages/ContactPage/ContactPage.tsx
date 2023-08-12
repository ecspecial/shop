import React from "react";
import instagramIcon from '../../../assets/icons/icons8-instagram.svg';
import facebookIcon from '../../../assets/icons/icons8-facebook.svg';
import telegramIcon from '../../../assets/icons/icons8-telegram.svg';
import './ContactPage.css';

const ContactPage: React.FC = () => {
    return (
        <div className="contact-info">
            <div className='social-container'>
                <h1>Contact us:</h1>
                <a href='https://www.instagram.com/aylatanwithlove/' target='_blank' rel='noreferrer'>
                    <img className='icon' src={instagramIcon} alt='logo'/>
                    Instagram
                </a>
                <a href='https://www.facebook.com/AYLATANNATALYA/' target='_blank' rel='noreferrer'>
                    <img className='icon' src={facebookIcon} alt='logo'/>
                    Facebook
                </a>
                <a href='https://t.me/aylatanwithlove' target='_blank' rel='noreferrer'>
                    <img className='icon' src={telegramIcon} alt='logo'/>
                    Telegram
                </a>
                <div className='email-div'>
                    Send us an Email at:<span className="email-span"> aylatan113@gmail.com</span>
                </div>
            </div>
        </div>
    )
}

export default ContactPage;