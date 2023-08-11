import React from 'react';
import './footer.css';
import instagramIcon from '../../../assets/icons/icons8-instagram.svg';
import facebookIcon from '../../../assets/icons/icons8-facebook.svg';
import telegramIcon from '../../../assets/icons/icons8-telegram.svg';

const Footer: React.FC = () => {
    return (
        <div className='footer'>
            <div className='footer-line'/>
            <div className='footer-line-second'/>
            <div className='socials-container'>
                <a href='https://www.instagram.com/aylatanwithlove/' target='_blank' rel='noreferrer'>
                    <img className='icon' src={instagramIcon} alt='logo'/>
                </a>
                <a href='https://www.facebook.com/AYLATANNATALYA/' target='_blank' rel='noreferrer'>
                    <img className='icon' src={facebookIcon} alt='logo'/>
                </a>
                <a href='https://t.me/aylatanwithlove' target='_blank' rel='noreferrer'>
                    <img className='icon' src={telegramIcon} alt='logo'/>
                </a>
            </div>
            <div className='trademark-container'>© Aylatan 2023</div>
        </div>
    );
}

export default Footer;