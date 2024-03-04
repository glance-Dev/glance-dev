import React from 'react';
import './Contact.css'; // Import your CSS file for styling

function Contact() {
    return (
        <div className="content">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 mr-auto">
                        <h3 className="mb-3">Let's work together</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae sequi, ipsa hic alias officia facilis eveniet, neque laborum cumque maxime soluta. Neque atque necessitatibus ipsam sequi soluta magni, iste vero fuga inventore, explicabo totam quis quia nemo possimus cupiditate doloribus?</p>
                        <p>Quasi optio numquam pariatur amet laudantium, dicta ullam obcaecati nihil eveniet et aperiam beatae illum vitae in asperiores, a ex. Voluptates accusantium, beatae dolorem natus delectus nostrum, iusto nemo optio quas eum, quis a in reprehenderit totam, sequi distinctio impedit.</p>
                        <p>Dolor aliquid, commodi vitae dolorum veniam amet error! Nemo nam quibusdam delectus dolore eveniet officia harum eum sit magnam possimus. Eum optio dolores repellat ea impedit, in unde, rem ipsam rerum autem iusto vero facilis blanditiis explicabo sapiente consequatur provident? <a href="mailto:info@mywebsite.com">info@mywebsite.com</a></p>
                    </div>

                    <div className="col-md-6">
                        <div className="box">
                            <h3 className="heading">How Can We Help?</h3>
                            <form className="mb-5" method="post" id="contactForm" name="contactForm">
                                <div className="row">
                                    <div className="col-md-6 form-group">
                                        <label htmlFor="name" className="col-form-label">Name *</label>
                                        <input type="text" className="form-control" name="name" id="name" placeholder="Your name" required />
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <label htmlFor="organization" className="col-form-label">Organization</label>
                                        <input type="text" className="form-control" name="organization" id="organization" placeholder="Your organization" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 form-group">
                                        <label htmlFor="email" className="col-form-label">Email *</label>
                                        <input type="email" className="form-control" name="email" id="email" placeholder="Your email address" required />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-12 form-group">
                                        <label htmlFor="message" className="col-form-label">Project Description *</label>
                                        <textarea className="form-control" name="message" id="message" cols="30" rows="7" required></textarea>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <input type="submit" value="Send Message" className="btn btn-block btn-primary rounded-0 py-2 px-4" />
                                        <span className="submitting"></span>
                                    </div>
                                </div>
                            </form>

                            <div id="form-message-warning" className="mt-4"></div>
                            <div id="form-message-success">
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
