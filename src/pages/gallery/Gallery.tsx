import React from "react";
import "./Gallery.scss";

import mainImage from "../../assets/images/birmingham-museums-trust-wKlHsooRVbg-unsplash.jpg";

const Gallery = () => {
    return(
        <>
            <section id="preview-image">
                <img className="main-image" src={mainImage}/>
                <div className="main-image-info">
                    <h1>Explore Art gallery online<br/>by Serhii Piatko and mark your favorite artworks now</h1>
                    <a href="#">View artists</a>
                </div>
            </section>
        </>
    );
}

export default Gallery;