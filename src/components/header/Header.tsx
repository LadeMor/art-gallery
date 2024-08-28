import React, { useState } from "react";
import "./Header.scss";

import { Link } from "react-router-dom";
import Container from "../container/Container";

import iconRight from "../../assets/icons/arrow-right-1.svg";
import closeIcon from "../../assets/icons/close.svg";

const Header = () => {

    type ID = number | null;
    type AnimClass = string | null;

    const [activeIndex, setActiveIndex] = useState<ID>(null);
    const [isMenuOpen, setIsMenuOpen] = useState<Boolean>(false);
    const [animClass, setAnimClass] = useState<AnimClass>(null);
    const [closeIconAnimClass, setCloseIconAnimClass] = useState<AnimClass>(null);

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

    const onMenuClick = () => {
        if(isMenuOpen){
            setIsMenuOpen(false);
            setAnimClass("animation-left-menu-pop-in");
        }else{
            setIsMenuOpen(true);
            setAnimClass("animation-left-menu-pop-up");
        }
    }

    const onCloseClick = () => {
        setIsMenuOpen(false);
        setAnimClass("animation-left-menu-pop-up");
    }

    const onCloseIconMouseOver = () => {
        setCloseIconAnimClass("close-icon-rotate-on");
    }

    const onCloseIconMouseOut = () => {
        setCloseIconAnimClass("close-icon-rotate-over");
    }

    return (
        <React.Fragment>
             <div className="dark-panel" style={{display: isMenuOpen ? "block" : "none"}} onClick={onCloseClick}>
                <div className={`nav-menu ${animClass}`} onClick={onCloseClick}>
                    <img src={closeIcon} 
                        className={`close-icon ${closeIconAnimClass}`} 
                        onClick={onCloseClick} 
                        onMouseOver={onCloseIconMouseOver} 
                        onMouseOut={onCloseIconMouseOut}/>
                    {links.map((item, index) => (
                        <span className="nav-menu-item">
                        <h1>
                            <Link to={item.to}>
                                {item.label}
                            </Link>
                        </h1>
                    </span>
                    ))}
                </div>
            </div>
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
                    <h1 className="menu-button" onClick={onMenuClick}>
                        Menu
                    </h1>
                </header >
            </Container>
        </React.Fragment>
    );
}

export default Header;