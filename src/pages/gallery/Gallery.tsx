import React from "react";
import "./Gallery.scss";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import mainImage from "../../assets/images/birmingham-museums-trust-wKlHsooRVbg-unsplash.jpg";

import slide1 from "../../assets/images/slider/slide1.jpg";
import slide2 from "../../assets/images/slider/slide2.jpg";
import slide3 from "../../assets/images/slider/slide3.jpg";
import slide4 from "../../assets/images/slider/slide4.jpg";
import slide5 from "../../assets/images/slider/slide5.jpg";

import nextSlideArrow from "../../assets/icons/slider-controll/next.svg";
import prevSlideArrow from "../../assets/icons/slider-controll/prev.svg";
import Container from "../../components/container/Container";

const NextArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
        <img
            className={className}
            style={{ ...style }}
            onClick={onClick}
            src={nextSlideArrow} />
    );
}

const PrevArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
        <img
            className={className}
            style={{ ...style }}
            onClick={onClick}
            src={prevSlideArrow} />
    );
}

const Gallery = () => {

    const settings = {
        className: "slider variable-width",
        dots: true,
        infinite: true,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />

    };

    return (
        <>
            <section id="preview-image">
                <Container>
                    <img className="main-image" src={mainImage} />
                    <div className="main-image-info">
                        <h1>Explore Art gallery online<br />by Serhii Piatko and mark your favorite artworks now</h1>
                        <a href="#">View artists</a>
                    </div>
                </Container>
            </section>
            <section id="image-slider">
                <Container>
                    <h1>Latest</h1>
                    <div className="slider-container">
                        <Slider {...settings}>
                            <img src={slide1} className="slider-image" />
                            <img src={slide2} className="slider-image" />
                            <img src={slide3} className="slider-image" />
                            <img src={slide4} className="slider-image" />
                            <img src={slide5} className="slider-image" />
                        </Slider>
                    </div>
                </Container>
            </section>
        </>
    );
}

export default Gallery;