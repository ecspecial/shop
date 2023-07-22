import React from 'react';
import './HomePage.css';
import pic1 from '../../../assets/images/nat/pic1.jpg'

const HomePage: React.FC = () => {
    return (
        <div className='home-container'>
            <img className='pic1' src={pic1} alt='Natalya-pic1'/>
        </div>
    )
}

export default HomePage;