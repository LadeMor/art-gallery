import React, { useState } from "react";
import "./Gallery.scss";
import Slider from "react-slick";
import Container from "../../components/container/Container";

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

import eric_orr from "../../assets/images/artists/ Eric_Orr.webp";
import grace_hartigan from "../../assets/images/artists/ grace_hartigan.webp";
import claes_odenburg from "../../assets/images/artists/Claes_Oldenburg.webp";
import judi_chicago from "../../assets/images/artists/Judy_Chicago.webp";
import mohsen_vaziri from "../../assets/images/artists/Mohsen_Vaziri_Moghaddam.webp";
import salvador_dali from "../../assets/images/artists/Salvador_Dalí.webp";

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

    const [currentAnimClass, setCurrentAnimClass] = useState("");

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

    const onMainImageMouseOver = () => {
        setCurrentAnimClass("main-image-title-animation-show");
    }

    const onMainImageMouseOut = () => {
        setCurrentAnimClass("main-image-title-animation-hide");
    }

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

    const onSliderImageOver = (index: number) =>{
        setCurrentIndex(index);
    }

    const onSliderImageOut = () =>{
        setCurrentIndex(null);
    }



    return (
        <>
            <section id="preview-image">
                <Container>
                    <div className="main-image-wrapper"
                        onMouseOver={onMainImageMouseOver}
                        onMouseOut={onMainImageMouseOut}>
                        <img className="main-image" src={mainImage} />
                        <div
                            className={`main-image-title ${currentAnimClass}`}>
                            <h1>Spring mountain</h1>
                            <a href="#">View Samuel Gordon artist</a>
                        </div>
                    </div>
                    <div className="main-image-info">
                        <h1>Explore Art gallery online<br />by Serhii Piatko and mark your favorite artworks now</h1>
                        <a href="#">View artists</a>
                    </div>
                </Container>
            </section>
            <section id="image-slider">
                <Container>
                    <h1 className="image-slider-main-title">Latest</h1>
                    <div className="slider-container">
                        <Slider {...settings}>
                            {sliderList.map((item, index) => (
                                <div className="main-image-wrapper"
                                    key={index}
                                    onMouseOver={() => onSliderImageOver(index)}
                                    onMouseOut={onMainImageMouseOut}>
                                    <img className="slider-image" src={item.url} />
                                    <div
                                        className={`slider-image-title ${currentIndex === index ? "main-image-title-animation-show" : "main-image-title-animation-hide"}`}>
                                        <h1>{item.label}</h1>
                                        <a href="#">View {item.artist} artist</a>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </Container>
            </section>
            <section id="artists">
                <Container>
                    <div className="artists-list-wrapper">
                        <hr/>
                        <div className="artists-card-row">
                                <div className="artists-card">
                                    <img src={eric_orr} className="artists-card-image"/>
                                    <div className="artists-card-info">
                                        <div>
                                            <h3>(Eric Orr)</h3>
                                            <p>Eric Orr was one of the pioneering figures of the Light and Space movement.</p>
                                        </div>
                                        <a href="#">View more</a>
                                    </div>
                                </div>
                                <div className="artists-card">
                                    <img src={grace_hartigan} className="artists-card-image"/>
                                    <div className="artists-card-info">
                                       <div>
                                            <h3>(Grace Hartigan)</h3>
                                            <p>Critics and historians have called Grace Hartigan both a second-generation Abstract Expressionist painter and a forebear of Pop art, though she was not satisfied with either categorization.</p>
                                       </div>
                                        <a href="#">View more</a>
                                    </div>
                                </div>
                        </div>
                        <hr/>
                        
                    </div>
                </Container>

            </section>
        </>
    );
}

export default Gallery;