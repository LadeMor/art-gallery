import React, { useMemo, useState } from "react";

import "./Footer.scss";

import Container from "../container/Container";

const Footer = () => {

    type ID = null | number;

    const [currentIndex, setCurrentIndex] = useState<ID>(null);

    const onFooterMouseOver = (index: ID) => {
        setCurrentIndex(index);
    }

    const onFooterMouseOut = () => {
        setCurrentIndex(null);
    }

    const footerLinksList = useMemo(() => [
        {
            title: "Follow",
            links: [
                { label: "Instagram", href: "#" },
                { label: "LinkedIn", href: "#" },
            ]
        },
        {
            title: "Help",
            links: [
                { label: "Terms of use", href: "#" },
                { label: "Support", href: "#" },
            ]
        },
        {
            title: "Contact",
            links: [
                { label: "sergpyatko@gmail.com", href: "#" },
                { label: "LinkedIn", href: "#" },
            ]
        },
    ], []);

    return (
        <Container>
            <footer>
                <div className="contacts-wrapper">
                    {
                        footerLinksList.map((item, index) => (
                            <React.Fragment key={index}>
                                <div className="footer-block" onMouseOver={() => onFooterMouseOver(index)} onMouseOut={onFooterMouseOut}>
                                    <h1>{item.title}</h1>
                                    {item.links.map(linkItem => (
                                        <a href={linkItem.href}>{linkItem.label}</a>
                                    ))}
                                    <div className={`cover-block ${index === currentIndex ? "footer-anim-fade-in" : "footer-anim-fade-out"}`}>
                                    </div>
                                </div>
                               {index +1 === footerLinksList.length ? null :  <hr className="mid-contacts-line"/>}
                            </React.Fragment>
                        ))
                    }
                </div>
                <div className="footer-mark">
                    <h2> Piatko Serhii | {new Date().getFullYear()}</h2>
                </div>
            </footer>
        </Container>
    );
}

export default Footer;