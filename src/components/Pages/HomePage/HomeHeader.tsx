import React from 'react';
import { cardData } from './HeaderCard/cardSpec';
import HeaderCard from './HeaderCard/HeaderCard';
import Slider from './Slider/Slider';
import './HomePage.css';
import NewSlider from './Slider/newSlider';

const HomeHeader: React.FC = () => {

    return (
        <div className='home-header'>
            {/* <Slider>
                {cardData.map((spec, index) => (
                    <HeaderCard key={index} spec={spec} />
                ))}
            </Slider> */}
            <NewSlider>
                {cardData.map((spec, index) => (
                    <HeaderCard key={index} spec={spec} />
                ))}
            </NewSlider>
        </div>
    )
}

export default HomeHeader;