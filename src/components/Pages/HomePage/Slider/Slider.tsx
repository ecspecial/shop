import React, { useEffect, useRef, useState } from "react";
import '../HomePage.css';
import { cardData } from '../HeaderCard/cardSpec';
import HeaderCard from '../HeaderCard/HeaderCard';

interface SliderProps {
    children: React.ReactNode[];
}

const Slider: React.FC<SliderProps> = ({children}) => {

    const [activeIndex, setActiveIndex] = useState(0);
    const [shouldAutoSlide, setShouldAutoSlide] = useState(true);
    const timeoutRef = useRef<number | null>(null);
    const [startX, setStartX] = useState(0);

    const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
        setStartX(event.clientX);
    };

    const handlePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
        handleSwipe(event.clientX);
    };

    const handleSwipe = (endX: number) => {
        if (startX < endX) {
          setActiveIndex(activeIndex === 0 ? children.length - 1 : activeIndex - 1);
        } else {
          setActiveIndex((activeIndex + 1) % children.length);
        }
        setShouldAutoSlide(false);
        setTimeout(() => setShouldAutoSlide(true), 20000);
    };


    const startSlideShow = () => {
        timeoutRef.current = window.setInterval( () => {
            setActiveIndex((prev) => (prev + 1) % children.length)
        }, 5000);
    };

    const stopSlideShow = () => {
        if (timeoutRef.current) {
            window.clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
    };

    useEffect(() => {
        if(shouldAutoSlide) {
            startSlideShow();
        } else {
            stopSlideShow();
        }

        return () => stopSlideShow();
    }, [activeIndex, shouldAutoSlide]);

    return (
        <div 
            className='slider'
        >
            {children.map((child, index) => (
                <div
                    key={index}
                    className={`slide ${index === activeIndex ? "active" : ""}`}
                >
                    {child}
                </div>
            ))}
            <div className="dots">
                {children.map((_, index) => (
                    <span
                        key={index}
                        onClick={() => {
                            setActiveIndex(index);
                            setShouldAutoSlide(false);
                            setTimeout(() => setShouldAutoSlide(true), 20000)
                        }}
                        className={`dot ${index === activeIndex ? "active" : ""}`}
                    />
                ))}
            </div>
            <button
        className="arrow left"
        onClick={() => {
          setActiveIndex(activeIndex === 0 ? children.length - 1 : activeIndex - 1);
          setShouldAutoSlide(false);
          setTimeout(() => setShouldAutoSlide(true), 20000);
        }}
      >
        Left
      </button>
      <button
        className="arrow right"
        onClick={() => {
          setActiveIndex((activeIndex + 1) % children.length);
          setShouldAutoSlide(false);
          setTimeout(() => setShouldAutoSlide(true), 20000);
        }}
      >
        Right
      </button>
        </div>
    )
}

export default Slider;