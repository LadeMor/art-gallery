import "./ArtistsList.css";

import { useAnimate, useInView } from "framer-motion";
import { useRef, useEffect, useMemo } from "react";

import Container from "../container/Container";

import eric_orr from "../../assets/images/artists/ Eric_Orr.webp";
import grace_hartigan from "../../assets/images/artists/ grace_hartigan.webp";
import claes_odenburg from "../../assets/images/artists/Claes_Oldenburg.webp";
import judi_chicago from "../../assets/images/artists/Judy_Chicago.webp";
import mohsen_vaziri from "../../assets/images/artists/Mohsen_Vaziri_Moghaddam.webp";
import salvador_dali from "../../assets/images/artists/Salvador_Dalí.webp";

const ArtistsList = () => {

    const container = useRef(null);
    const [scope, animate] = useAnimate();
    const isInView = useInView(container, { once: true });
    const artistElem = useRef<(HTMLDivElement | null)[]>([]);

    const artistsList = useMemo(() =>  [
        {
            url: eric_orr,
            name: "Eric Orr",
            description: "Eric Orr was one of the pioneering figures of the Light and Space movement."
        },
        {
            url: grace_hartigan,
            name: "Grace Hartigan",
            description: "Critics and historians have called Grace Hartigan both a second-generation Abstract Expressionist painter and a forebear of Pop art, though she was not satisfied with either categorization."
        },
        {
            url: claes_odenburg,
            name: "Eric Orr",
            description: "Eric Orr was one of the pioneering figures of the Light and Space movement."
        },
        {
            url: judi_chicago,
            name: "Grace Hartigan",
            description: "Critics and historians have called Grace Hartigan both a second-generation Abstract Expressionist painter and a forebear of Pop art, though she was not satisfied with either categorization."
        },
        {
            url: mohsen_vaziri,
            name: "Eric Orr",
            description: "Eric Orr was one of the pioneering figures of the Light and Space movement."
        },
        {
            url: salvador_dali,
            name: "Grace Hartigan",
            description: "Critics and historians have called Grace Hartigan both a second-generation Abstract Expressionist painter and a forebear of Pop art, though she was not satisfied with either categorization."
        },
    ], [])


    const renderArtistsList = (list: any) => {
        let rowsList = [];
        let cardAnimDelay = 0;
        for (let index = 0; index < list.length; index += 2) {
            cardAnimDelay++;
            rowsList.push(<>
                <hr />
                <div className="artists-card-row"  ref={(el) => (artistElem.current[index] = el)}>
                    <div className={`artists-card ${isInView ? "animations-artists-card" : null}`} style={{animationDelay:`${1 + (0.1 * cardAnimDelay)}s` }}>
                        <img src={list[index].url} className="artists-card-image" />
                        <div className="artists-card-info">
                            <div>
                                <h3>(Eric Orr)</h3>
                                <p>Eric Orr was one of the pioneering figures of the Light and Space movement.</p>
                            </div>
                            <a href="#">View more</a>
                            
                        </div>
                    </div>
                    <hr className="mid-card-line"/>
                    <div className={`artists-card ${isInView ? "animations-artists-card" : null}`} style={{animationDelay:`${1 + (0.1 * cardAnimDelay )}s` }}>
                        <img src={list[index+1].url} className="artists-card-image" />
                        <div className="artists-card-info">
                            <div>
                                <h3>(Grace Hartigan)</h3>
                                <p>Critics and historians have called Grace Hartigan both a second-generation Abstract Expressionist painter and a forebear of Pop art, though she was not satisfied with either categorization.</p>
                            </div>
                            <a href="#">View more</a>
                        </div>
                    </div>
                </div>
            </>);
        }
        return rowsList;
    }


    return (
        <section id="artists" ref={container}>
            <Container>
                <h1 className="artists-list-title">Discover popular artists</h1>
                <div className="artists-list-wrapper">
                    {renderArtistsList(artistsList)}
                </div>
            </Container>
        </section>
    );
}

export default ArtistsList;