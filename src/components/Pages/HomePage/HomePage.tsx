import React from 'react';
import './HomePage.css';
import { cardData } from './Header/cardSpec';
import Slider from './Slider/Slider';

const HomePage: React.FC = () => {
    return (
        <div className='home-container'>
            <div className='home-header'>
                <Slider cardData={cardData} />
            </div>
        </div>
    );
}

export default HomePage;