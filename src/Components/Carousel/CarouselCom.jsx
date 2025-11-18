import React from 'react'
import "./carousel.css";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import img1 from "../../assets/carousel/img1.jpeg"
import img2 from "../../assets/carousel/img2.jpeg"

const CarouselCom = () => {
    const handleDragStart = (e) => e.preventDefault();
      const items = [
        <img src={img1} onDragStart={handleDragStart} role="presentation" style={{objectFit:"contain"}}/>,
        <img src={img2} onDragStart={handleDragStart} role="presentation" style={{objectFit:"contain"}}/>
      ];
    const renderPrevButton = ({ isDisabled }) => {
        return (
          <button className="carousel-nav-btn prev-btn" disabled={isDisabled}>
            <ChevronLeft size={30} /> 
          </button>
        );
      };
    
      const renderNextButton = ({ isDisabled }) => {
        return (
          <button className="carousel-nav-btn next-btn" disabled={isDisabled}>
            <ChevronRight size={30} /> 
          </button>
        );
      };
  return (
    <>
    <div className="carousel-container-wrapper">
        <AliceCarousel
          mouseTracking
          items={items}
          autoPlay="true"
          autoPlayInterval="10000"
          infinite="true"
          renderPrevButton={renderPrevButton}
          renderNextButton={renderNextButton}
          disableButtonsControls={false} 
          sx={{height:"600px"}}
        />
      </div>
    </>
  )
}

export default CarouselCom
