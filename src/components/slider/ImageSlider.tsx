import React, { ReactNode, useState } from "react";
import Slider from "react-slick";
import Container from "../container/Container";
import { NextArrow, PrevArrow } from "../../components/arrows/Arrows";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ImageSlider.scss";

import slide1 from "../../assets/images/slider/slide1.jpg";
import slide2 from "../../assets/images/slider/slide2.jpg";
import slide3 from "../../assets/images/slider/slide3.jpg";
import slide4 from "../../assets/images/slider/slide4.jpg";
import slide5 from "../../assets/images/slider/slide5.jpg";

const ImageSlider = () => {

    const sliderList = [
        {
            label: "Gods utopia",
            url: slide1,
            artist: "John Perziy"
        },
        {
            label: "Gods utopia",
            url: slide2,
            artist: "John Perziy"
        },
        {
            label: "Gods utopia",
            url: slide3,
            artist: "John Perziy"
        },
        {
            label: "Gods utopia",
            url: slide4,
            artist: "John Perzi"
        },
        {
            label: "Gods utopia",
            url: slide5,
            artist: "John Perziy"
        },
    ]

    type ID = number | null;

    const [currentIndex, setCurrentIndex] = useState<ID>(null);

    const onSliderImageOver = (index: ID) => {
        setCurrentIndex(index);
    }

    const onSliderImageMouseOut = () => {
        setCurrentIndex(null);
    }

   

    return (
        <Container>
            <h1 className="image-slider-main-title">Latest</h1>
            <div className="slider-container">
                
            </div>
        </Container>
    );
}

export default ImageSlider;