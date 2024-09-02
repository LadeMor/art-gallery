import { useState } from "react";

import Container from "../container/Container";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

import "./ImageList.css";

interface ImageItem {
    url: string;
    label: string;
    description: string;
    price: number;
  }
  
  interface ImageListProps {
    list: ImageItem[];
  }

const ImageList: React.FC<ImageListProps> = ({list}) => {

    type ID = null | number;

    const [currentIndex, setCurrentIndex] = useState<ID>(null);

    const breakpointColumnsObj= {
        default: 3,
        1240: 3,
        920: 2,
        500: 1
    };

    const priceParser = (price: number): string => {
        return (price / 100).toString();
    }

    const onArtCardMouseOver = (index: ID) => {
        setCurrentIndex(index);
    }

    const onArtCardMouseOut = () => {
        setCurrentIndex(null);
    }

    return(
        <Container>
            <ResponsiveMasonry
            columnsCountBreakPoints={breakpointColumnsObj}>
                <Masonry
                    >
                    {list.map((item, index) => (
                        <div className="art-list-card" style={{animationDelay:`${0.3 + (0.1 * index)}s`}}
                        onMouseOver={() => onArtCardMouseOver(index)}
                        onMouseOut={onArtCardMouseOut}>
                            <div className="art-list-image-container">
                                <img src={item.url} alt={`art${index}`} className={`art-list-image-card ${currentIndex === index ? "animation-zoom-in-card-image" : "animation-zoom-out-card-image"}`} />
                            </div>
                            <div className="art-list-card-info">
                                <h3>{item.label}</h3>
                                <p>{item.description}</p>
                                <h3 className="price-title">{priceParser(item.price)}$</h3>
                            </div>
                        </div>
                    ))}
                </Masonry>
            </ResponsiveMasonry>
        </Container>
    );
}

export default ImageList;