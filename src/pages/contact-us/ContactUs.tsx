import React from "react";
import Container from "../../components/container/Container";

import "./ContactUs.css"

const ContactUs = () => {

    const onFormSubmit = (e: any) => {
        e.preventDefault();
    }

    return (
        <section id="contact-us">
            <Container>
                <h1 className="main-contact-us-title">Let`s contact!</h1>
                <div className="form-wrapper">
                    <div className="form-block-text">
                        <p>
                            Feel free to reach out to us with any questions, concerns, or suggestions. We're here to help and would love to hear from you!
                            <br/>
                            <br/>
                            <br/>
                            You can also contact us throught email<br/>
                            <span className="email-text">artgallery@gmail.com</span>
                        </p>
                    </div>
                    <div className="form-block">
                        <form onSubmit={onFormSubmit}>
                            <div className="name-inputs animation-input-fade-in" style={{animationDelay:"0.2s"}}>
                                <div className="form-input">
                                    <label>First name:</label>
                                    <input type="text" />
                                </div>
                                <div className="form-input ">
                                    <label>Last name:</label>
                                    <input type="text" />
                                </div>
                            </div>
                            <div className="form-input animation-input-fade-in" style={{animationDelay:"0.4s"}}>
                                <label>Your email:</label>
                                <input type="email" />
                            </div>
                            <div className="form-textarea animation-input-fade-in" style={{animationDelay:"0.6s"}}>
                                <label>Tell us more:</label>
                                <textarea />
                            </div>
                            <div>
                                <button className="animation-input-fade-in" style={{animationDelay:"0.8s"}}>Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default ContactUs;