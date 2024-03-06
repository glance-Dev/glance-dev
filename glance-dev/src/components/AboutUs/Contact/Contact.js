import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <div className="about-content">
            <div className="about-container">
                <div className="about-row">
                    <div className="about-column">
                        <h3 className="about-heading">Let's work together</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae sequi, ipsa hic alias officia facilis eveniet, neque laborum cumque maxime soluta. Neque atque necessitatibus ipsam sequi soluta magni, iste vero fuga inventore, explicabo totam quis quia nemo possimus cupiditate doloribus?</p>
                        <p>Quasi optio numquam pariatur amet laudantium, dicta ullam obcaecati nihil eveniet et aperiam beatae illum vitae in asperiores, a ex. Voluptates accusantium, beatae dolorem natus delectus nostrum, iusto nemo optio quas eum, quis a in reprehenderit totam, sequi distinctio impedit.</p>
                        <p>Dolor aliquid, commodi vitae dolorum veniam amet error! Nemo nam quibusdam delectus dolore eveniet officia harum eum sit magnam possimus. Eum optio dolores repellat ea impedit, in unde, rem ipsam rerum autem iusto vero facilis blanditiis explicabo sapiente consequatur provident? <a href="mailto:info@mywebsite.com">info@mywebsite.com</a></p>
                    </div>

                    <div className="about-column">
                        <div className="about-box">
                            <h3 className="about-boxHeading">How Can We Help?</h3>
                            <form className="about-form" method="post" id="contactForm" name="contactForm">
                                <div className="about-formRow">
                                    <div className="about-formColumn">
                                        <label className="about-label" htmlFor="name">Name *</label>
                                        <input type="text" className="about-input" name="name" id="name" placeholder="Your name" required />
                                    </div>
                                    <div className="about-formColumn">
                                        <label className="about-label" htmlFor="organization">Organization</label>
                                        <input type="text" className="about-input" name="organization" id="organization" placeholder="Your organization" />
                                    </div>
                                </div>
                                <div className="about-formRow">
                                    <div className="about-formColumn">
                                        <label className="about-label" htmlFor="email">Email *</label>
                                        <input type="email" className="about-input" name="email" id="email" placeholder="Your email address" required />
                                    </div>
                                </div>

                                <div className="about-formRow">
                                    <div className="about-formColumn">
                                        <label className="about-label" htmlFor="message">Project Description *</label>
                                        <textarea className="about-textarea" name="message" id="message" cols="30" rows="7" required></textarea>
                                    </div>
                                </div>
                                <div className="about-formRow">
                                    <div className="about-formColumn">
                                        <input type="submit" value="Send Message" className="about-button" />
                                        <span className="about-submitting"></span>
                                    </div>
                                </div>
                            </form>

                            <div className="about-formMessage" id="form-message-warning"></div>
                            <div className="about-formMessage" id="form-message-success">
                                Your message was sent, thank you!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
