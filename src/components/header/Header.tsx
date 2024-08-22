import React, { useState } from "react";
import "./Header.scss";

import iconRight from "../../assets/icons/arrow-right-1.svg";
import { Link } from "react-router-dom";
import Container from "../container/Container";

const Header = () => {

    type ID = number | null;

    const [activeIndex, setActiveIndex] = useState<ID>(null);

    const onLinkMouseOver = (index: ID) => {
        setActiveIndex(index);
    }

    const onLinkMouseOut = () => {
        setActiveIndex(null);
    }

    const links = [
        { label: "Gallery", to: "/" },
        { label: "Artists", to: "/artists" },
        { label: "About me", to: "/about-me" },
    ]

    return (
        <Container>
            <header>
                    <h1>Art | Gallery</h1>
                    <div className="header-links">
                        {links.map((item, index) => (
                            <div className="header-link-wrapper"
                                onMouseOver={() => onLinkMouseOver(index)}
                                onMouseOut={onLinkMouseOut}
                                key={index}
                            >
                                <span className="header-link-item">
                                    <h1>
                                        <Link to={item.to}>
                                            {item.label}
                                        </Link>
                                    </h1>
                                    <img src={iconRight} />
                                </span>
                                <div className={`header-underline ${index === activeIndex ? "underline-animation" : null}`}></div>
                            </div>
                        ))}

                    </div>
                    <h1>
                        <a href="#">Menu</a>
                    </h1>
                </header >
        </Container>
    );
}

export default Header;