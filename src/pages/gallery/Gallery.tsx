import React, { ReactNode, useState } from "react";
import "./Gallery.scss";
import Container from "../../components/container/Container";
import ImageSlider from "../../components/slider/ImageSlider";

import mainImage from "../../assets/images/birmingham-museums-trust-wKlHsooRVbg-unsplash.jpg";
import ArtistsList from "../../components/artists-list/ArtistsList";

const Gallery = () => {

    const [currentAnimClass, setCurrentAnimClass] = useState("");

    const onMainImageMouseOver = () => {
        setCurrentAnimClass("main-image-title-animation-show");
    }

    const onMainImageMouseOut = () => {
        setCurrentAnimClass("main-image-title-animation-hide");
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
                {/* <ImageSlider/> */}
            </section>
            <ArtistsList/>
        </>
    );
}

export default Gallery;