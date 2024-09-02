import { useState, useRef } from "react";
import "./Gallery.css";
import Container from "../../components/container/Container";

import mainImage from "../../assets/images/birmingham-museums-trust-wKlHsooRVbg-unsplash.jpg";
import parallaxImage from "../../assets/images/parallax-image.jpg";

import ArtistsList from "../../components/artists-list/ArtistsList";
import {useScroll, useTransform, motion} from "framer-motion";

const Gallery = () => {

    const container = useRef(null);
    const title = useRef(null);

    const {scrollYProgress} = useScroll({
        target:container,
        offset:['start end', 'end start']
    })

    const sm = useTransform(scrollYProgress, [0, 1], [0, -600]);

    const [currentAnimClass, setCurrentAnimClass] = useState("");

    const onMainImageMouseOver = () => {
        setCurrentAnimClass("main-image-title-animation-show");
    }

    const onMainImageMouseOut = () => {
        setCurrentAnimClass("main-image-title-animation-hide");
    }

    return (
        <div ref={container}>
            <section id="preview-image">
                <Container>
                    <div className="main-image-wrapper"
                        onMouseOver={onMainImageMouseOver}
                        onMouseOut={onMainImageMouseOut}>
                        <img className="main-image" src={mainImage} alt="main-art" loading="lazy"/>
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
            <section id="parallax">
                <Container>
                    <div className="parallax-list">
                        <div className="parallax-image-container">
                            <motion.img style={{y:sm}} ref={title} src={parallaxImage} className="parallax-image"/>
                            <div className="parallax-image-title">
                                <h1>Explore art freedom</h1>
                            </div>
                        </div>
                    </div>
                </Container>

            </section>
            <ArtistsList />
        </div>
    );
}

export default Gallery;