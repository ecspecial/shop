import React, { useEffect, useRef, useState } from "react";
import '../HomePage.css';
import { cardData } from '../HeaderCard/cardSpec';
import HeaderCard from '../HeaderCard/HeaderCard';

interface SliderProps {
    children: React.ReactNode[];
}

const NewSlider: React.FC<SliderProps> = ({children}) => {


    return (
        <div>
            {children.map((child, index) => (
                <div
                    key={index}
                >
                    {child}
                </div>
            ))}
        </div>
    )
}

export default NewSlider;