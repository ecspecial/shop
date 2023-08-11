import React from 'react';
import './HeaderCard.css';
import { CardSpec } from './cardSpec';

interface CardProps {
    spec: CardSpec;
}

const HeaderCard: React.FC<CardProps> = ({ spec }) => {
    return (
        <div className='card'>
            <div className='card-image-container'>
                <img className='card-image' src={spec.image} alt={spec.header} />
            </div>
            <div className='card-content'>
                <h2 className='card-header'>{spec.header}</h2>
                <div className='card-description'>{spec.description}</div>
            </div>
        </div>
    );
}

export default HeaderCard;