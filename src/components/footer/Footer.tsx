import React from "react";

import "./Footer.scss";

import Container from "../container/Container";

const Footer = () => {
    return(
        <Container>
            <footer>
                <div className="contacts-wrapper">
                    <div className="footer-block">
                        <h1>Follow</h1>
                        <a href="#">Instagram</a>
                        <a href="#">LinkedIn</a>
                    </div>
                    <div className="footer-block">
                        <h1>Help</h1>
                        <a href="#">Terms of use</a>
                        <a href="#">Support</a>
                    </div>
                    <div className="footer-block">
                        <h1>Contact</h1>
                        <a href="#">sergpyatko@gmail.com</a>
                        <a href="#">LinkedIn</a>
                    </div>
                </div>
                <div className="footer-mark">
                    <h2> Piatko Serhii | {new Date().getFullYear()}</h2>
                </div>
            </footer>
        </Container>
    );
}

export default Footer;