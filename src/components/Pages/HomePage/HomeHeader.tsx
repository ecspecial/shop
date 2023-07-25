import React from 'react';
import { cardData } from './HeaderCard/cardSpec';
import HeaderCard from './HeaderCard/HeaderCard';
import Slider from './Slider/Slider';
import './HomePage.css';

const HomeHeader: React.FC = () => {

    return (
        <div className='home-header'>
            <Slider>
                {cardData.map((spec, index) => (
                    <HeaderCard key={index} spec={spec} />
                ))}
            </Slider>
        </div>
    )
}

export default HomeHeader;