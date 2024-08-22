import React, { useState } from "react";
import "./Header.scss";

import iconRight from "../../assets/icons/arrow-right-1.svg";

const animationClass = "underline-animation";

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
        { label: "Gallery", href: "#" },
        { label: "Artists", href: "#" },
        { label: "About me", href: "#" },
    ]

    return (
        <header>
            <h1>Art | Gallery</h1>
            <div className="header-links">
                {/* <div className="header-link-wrapper"
                    onMouseOver={onLinkMouseOver}
                    onMouseOut={onLinkMouseOut}
                >
                    <span className="header-link-item">
                        <h1><a href="#">Gallery</a></h1>
                        <img src={iconRight} />
                    </span>
                    <div className={`header-underline ${animation}`}></div>
                </div>
                <div className="header-link-wrapper"
                    onMouseOver={onLinkMouseOver}
                    onMouseOut={onLinkMouseOut}
                >
                    <span className="header-link-item">
                        <h1><a href="#">Artists</a></h1>
                        <img src={iconRight} />
                    </span>
                    <div className={`header-underline ${animation}`}></div>
                </div>

                <div className="header-link-wrapper"
                    onMouseOver={onLinkMouseOver}
                    onMouseOut={onLinkMouseOut}
                >
                    <span className="header-link-item">
                        <h1><a href="#">About me</a></h1>
                        <img src={iconRight} />
                    </span>
                    <div className={`header-underline ${animation}`}></div>
                </div> */}
                {links.map((item, index) => (
                    <div className="header-link-wrapper"
                        onMouseOver={() => onLinkMouseOver(index)}
                        onMouseOut={onLinkMouseOut}
                    >
                        <span className="header-link-item">
                            <h1><a href={item.href}>{item.label}</a></h1>
                            <img src={iconRight} />
                        </span>
                        <div className={`header-underline ${index === activeIndex ? "underline-animation" : null}`}></div>
                    </div>
                ))}

            </div>
            <h1>
                <a href="#">Menu</a>
            </h1>
        </header>
    );
}

export default Header;