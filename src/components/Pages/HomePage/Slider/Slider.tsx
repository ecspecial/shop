import React, { useEffect, useRef, useState } from "react";
import { CardSpec } from "../Header/cardSpec";
import HeaderCard from '../Header/HeaderCard';
import './Slider.css';

interface SliderProps {
    cardData: CardSpec[];
}

const Slider: React.FC<SliderProps> = ({ cardData }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [startX, setStartX] = useState<number | null>(null);
    const sliderRef = useRef<HTMLDivElement | null>(null);
    const activeSlideRef = useRef<HTMLDivElement | null>(null);
    const [shouldAutoSlide, setShouldAutoSlide] = useState(true);
    const timeoutRef = useRef<number | null>(null);
    const [slideDirection, setSlideDirection] = useState(1);

    const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
        setStartX(event.clientX);
    };

    const handlePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
        if (startX !== null) {
            handleSwipe(event.clientX);
        }
    };

    const handleSwipe = (endX: number) => {
        if (startX! < endX) {
            if (activeIndex !== 0) {
                setActiveIndex(activeIndex - 1);
            }
        } else {
            if (activeIndex !== cardData.length -1) {
                setActiveIndex(activeIndex + 1);
            }
        }
        setShouldAutoSlide(false);
        setTimeout(() => setShouldAutoSlide(true), 20000);
    };

    const startSlideShow = () => {
        timeoutRef.current = window.setInterval(() => {
            if (activeIndex === cardData.length - 1) {
                setSlideDirection(-1);
            } else if (activeIndex === 0) {
                setSlideDirection(1);
            }
    
            setActiveIndex((prev) => {
                const newIndex = prev + slideDirection;
                if (newIndex < 0) {
                    return cardData.length - 2;
                } else if (newIndex === cardData.length) {
                    return 1;
                }
                return newIndex;
            });
        }, 10000);
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

    useEffect(() => {
        if (sliderRef.current && activeSlideRef.current) {
            const offsetPercentage = -activeIndex * 33.33;
            const slidesContainer = sliderRef.current.querySelector('.slidesContainer') as HTMLElement;
            slidesContainer.style.transform = `translateX(${offsetPercentage}%)`;
            
            const height = activeSlideRef.current.offsetHeight + 20;
            sliderRef.current.style.height = `${height}px`;
        }
    }, [activeIndex]);

    return (
        <div className="slider" ref={sliderRef} onPointerDown={handlePointerDown} onPointerUp={handlePointerUp}>
            <div className="slidesContainer">
                {cardData.map((spec, index) => (
                    <div 
                        key={index} 
                        className={`slide ${index === activeIndex ? "active" : ""}`}
                        ref={index === activeIndex ? activeSlideRef : null}
                    >
                        <HeaderCard spec={spec}/>
                    </div>
                ))}
            </div>
            <div className="dots">
                {cardData.map((_, index) => (
                    <span
                        key={index}
                        onClick={() => {
                            setActiveIndex(index);
                        }}
                        className={`dot ${index === activeIndex ? "active" : ""}`}
                    />
                ))}
            </div>
        </div> 
    );
}

export default Slider;