import { useMemo } from "react";
import Masonry from 'react-masonry-css';

import Container from "../../components/container/Container";

import "./GalleryList.css";

import pic1 from "../../assets/images/art-gallery/pic1.webp";
import pic2 from "../../assets/images/art-gallery/pic2.webp";
import pic3 from "../../assets/images/art-gallery/pic3.webp";
import pic4 from "../../assets/images/art-gallery/pic4.webp";
import pic5 from "../../assets/images/art-gallery/pic5.webp";
import pic6 from "../../assets/images/art-gallery/pic6.webp";
import pic7 from "../../assets/images/art-gallery/pic7.webp";
import pic8 from "../../assets/images/art-gallery/pic8.webp";
import pic9 from "../../assets/images/art-gallery/pic9.webp";
import pic10 from "../../assets/images/art-gallery/pic10.webp";
import pic11 from "../../assets/images/art-gallery/pic11.webp";
import pic12 from "../../assets/images/art-gallery/pic12.webp";
import pic13 from "../../assets/images/art-gallery/pic13.webp";


const GalleryList = () => {

    const artList = useMemo(() => [
        { url: pic1, label: "Art 1", description: "60 x 70 cm / 23.62 x 27.56 in, oil / canvas Tetiana Shuliak", price: 315700 },
        { url: pic2, label: "Art 1", description: "60 x 70 cm / 23.62 x 27.56 in, oil / canvas Tetiana Shuliak", price: 315700 },
        { url: pic3, label: "Art 1", description: "60 x 70 cm / 23.62 x 27.56 in, oil / canvas Tetiana Shuliak", price: 315700 },
        { url: pic4, label: "Art 1", description: "60 x 70 cm / 23.62 x 27.56 in, oil / canvas Tetiana Shuliak", price: 315700 },
        { url: pic5, label: "Art 1", description: "60 x 70 cm / 23.62 x 27.56 in, oil / canvas Tetiana Shuliak", price: 315700 },
        { url: pic6, label: "Art 1", description: "60 x 70 cm / 23.62 x 27.56 in, oil / canvas Tetiana Shuliak", price: 315700 },
        { url: pic7, label: "Art 1", description: "60 x 70 cm / 23.62 x 27.56 in, oil / canvas Tetiana Shuliak", price: 315700 },
        { url: pic8, label: "Art 1", description: "60 x 70 cm / 23.62 x 27.56 in, oil / canvas Tetiana Shuliak", price: 315700 },
        { url: pic9, label: "Art 1", description: "60 x 70 cm / 23.62 x 27.56 in, oil / canvas Tetiana Shuliak", price: 315700 },
        { url: pic10, label: "Art 1", description: "60 x 70 cm / 23.62 x 27.56 in, oil / canvas Tetiana Shuliak", price: 315700 },
        { url: pic11, label: "Art 1", description: "60 x 70 cm / 23.62 x 27.56 in, oil / canvas Tetiana Shuliak", price: 315700 },
        { url: pic12, label: "Art 1", description: "60 x 70 cm / 23.62 x 27.56 in, oil / canvas Tetiana Shuliak", price: 315700 },
        { url: pic13, label: "Art 1", description: "60 x 70 cm / 23.62 x 27.56 in, oil / canvas Tetiana Shuliak", price: 315700 },
    ], [])


    const breakpointColumnsObj = {
        default: 3,
        1100: 3,
        700: 2,
        500: 1
    };

    const priceParser = (price: number): string => {
        return (price / 100).toString();
    }

    return (
        <Container>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">
                {artList.map((item, index) => (
                    <div className="art-list-card" style={{animationDelay:`${0.3 + (0.1 * index)}s`}}>
                        <img src={item.url} className="art-list-image-card" />
                        <div className="art-list-card-info">
                            <h3>{item.label}</h3>
                            <p>{item.description}</p>
                            <h3 className="price-title">{priceParser(item.price)}$</h3>
                        </div>
                    </div>
                ))}
            </Masonry>
        </Container>
    );

}

export default GalleryList;