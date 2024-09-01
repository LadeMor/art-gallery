import React, { useMemo, useState } from "react";
import "./Header.scss";

import { Link } from "react-router-dom";
import Container from "../container/Container";

import iconRight from "../../assets/icons/arrow-right-1.svg";
import closeIcon from "../../assets/icons/close.svg";

import {motion} from "framer-motion";

const Header = () => {

    type ID = number | null;
    type AnimClass = string | null;

    const [activeIndex, setActiveIndex] = useState<ID>(null);
    const [activeMenuItemIndex, setActiveMenuItemIndex] = useState<ID>(null);
    const [isMenuOpen, setIsMenuOpen] = useState<Boolean>(false);
    const [animClass, setAnimClass] = useState<AnimClass>(null);
    const [closeIconAnimClass, setCloseIconAnimClass] = useState<AnimClass>(null);

    const onLinkMouseOver = (index: ID) => {
        setActiveIndex(index);
    }

    const onLinkMouseOut = () => {
        setActiveIndex(null);
    }

    const links = useMemo(() => [
        { label: "Main", to: "/", description: "Explore a curated collection of stunning artworks that captivate and inspire, each piece telling its own unique story." },
        { label: "Gallery", to: "/gallery", description: "Discover the brilliant minds behind the masterpieces, where creativity knows no bounds and each artist leaves their mark on the world" },
        { label: "Contact Us", to: "/contact-us", description: "Learn more about the passion and vision driving this artistic journey, and the story behind the creation of this inspiring space." },
    ], [])

    const onMenuClick = () => {
        if (isMenuOpen) {
            setIsMenuOpen(false);
            setAnimClass("animation-left-menu-pop-in");
        } else {
            setIsMenuOpen(true);
            setAnimClass("animation-left-menu-pop-up");
        }
    }

    const onCloseClick = () => {
        if (isMenuOpen) {
            setIsMenuOpen(false);
            setAnimClass("animation-left-menu-pop-in");
        } else {
            setIsMenuOpen(true);
            setAnimClass("animation-left-menu-pop-up");
        }
    }

    const onCloseIconMouseOver = () => {
        setCloseIconAnimClass("close-icon-rotate-on");
    }

    const onCloseIconMouseOut = () => {
        setCloseIconAnimClass("close-icon-rotate-over");
    }

    const onMenuItemMouseOver = (index: ID) => {
        setActiveMenuItemIndex(index);
    }

    const onMenuItemMouseOut = () => {
        setActiveMenuItemIndex(null);
    }

    return (
        <React.Fragment>
            <div className={`nav-menu ${animClass}`} onClick={onCloseClick} >
                <img src={closeIcon}
                    className={`close-icon ${closeIconAnimClass}`}
                    onClick={onCloseClick}
                    onMouseOver={onCloseIconMouseOver}
                    onMouseOut={onCloseIconMouseOut} />
                {links.map((item, index) => (
                    <div className="nav-menu-item" onMouseOver={() => onMenuItemMouseOver(index)}
                        onMouseOut={onMenuItemMouseOut} >
                        <h1>
                            <Link to={item.to} >
                                {item.label}
                            </Link>
                        </h1>
                        <p className={`nav-menu-item-description ${activeMenuItemIndex === index ?
                            "animation-nav-menu-item-description-show" : "animation-nav-menu-item-description-hide"}`}
                        >{item.description}</p>
                    </div>
                ))}
            </div>
            <div className="dark-panel" style={{ display: isMenuOpen ? "block" : "none" }} onClick={onCloseClick}>

            </div>
            <Container>
                <header>
                    <motion.h1
                    className="box"
                    initial={{opacity:0, scale: 0.5}}
                    animate={{opacity:1, scale: 1}}
                    transition={{
                        duration:0.8,
                        delay:0.5,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}
                    >Art | Gallery</motion.h1>
                    <div className="header-links">
                        {links.map((item, index) => (
                            <div className="header-link-wrapper"
                                onMouseOver={() => onLinkMouseOver(index)}
                                onMouseOut={onLinkMouseOut}
                                key={index}
                            >
                                <span className="header-link-item">
                                    <motion.h1 
                                    className="box"
                                    initial={{opacity:0, scale: 0.5}}
                                    animate={{opacity:1, scale: 1}}
                                    transition={{
                                        duration:0.8,
                                        delay:0.7 + index * 0.3,
                                        ease: [0, 0.71, 0.2, 1.01]
                                    }}>
                                        <Link to={item.to}>
                                            {item.label}
                                        </Link>
                                    </motion.h1>
                                    <img src={iconRight} />
                                </span>
                                <div className={`header-underline ${index === activeIndex ? "underline-animation" : null}`}></div>
                            </div>
                        ))}

                    </div>
                    <motion.h1 onClick={onMenuClick} className="box menu-button"
                                    initial={{opacity:0, translateY: "-100px"}}
                                    animate={{opacity:1,translateY: "-0px"}}
                                    transition={{
                                        duration:0.8,
                                        delay:2,
                                        ease: [0, 0.71, 0.2, 1.01]
                                    }}>
                        Menu
                    </motion.h1>
                </header >
            </Container>
        </React.Fragment>
    );
}

export default Header;