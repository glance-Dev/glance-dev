import React from 'react';

function Contact() {
    return (
        <div style={styles.content}>
            <div style={styles.container}>
                <div style={styles.row}>
                    <div style={styles.column}>
                        <h3 style={styles.heading}>Let's work together</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae sequi, ipsa hic alias officia facilis eveniet, neque laborum cumque maxime soluta. Neque atque necessitatibus ipsam sequi soluta magni, iste vero fuga inventore, explicabo totam quis quia nemo possimus cupiditate doloribus?</p>
                        <p>Quasi optio numquam pariatur amet laudantium, dicta ullam obcaecati nihil eveniet et aperiam beatae illum vitae in asperiores, a ex. Voluptates accusantium, beatae dolorem natus delectus nostrum, iusto nemo optio quas eum, quis a in reprehenderit totam, sequi distinctio impedit.</p>
                        <p>Dolor aliquid, commodi vitae dolorum veniam amet error! Nemo nam quibusdam delectus dolore eveniet officia harum eum sit magnam possimus. Eum optio dolores repellat ea impedit, in unde, rem ipsam rerum autem iusto vero facilis blanditiis explicabo sapiente consequatur provident? <a href="mailto:info@mywebsite.com">info@mywebsite.com</a></p>
                    </div>

                    <div style={styles.column}>
                        <div style={styles.box}>
                            <h3 style={styles.boxHeading}>How Can We Help?</h3>
                            <form style={styles.form} method="post" id="contactForm" name="contactForm">
                                <div style={styles.formRow}>
                                    <div style={styles.formColumn}>
                                        <label style={styles.label} htmlFor="name">Name *</label>
                                        <input type="text" style={styles.input} name="name" id="name" placeholder="Your name" required />
                                    </div>
                                    <div style={styles.formColumn}>
                                        <label style={styles.label} htmlFor="organization">Organization</label>
                                        <input type="text" style={styles.input} name="organization" id="organization" placeholder="Your organization" />
                                    </div>
                                </div>
                                <div style={styles.formRow}>
                                    <div style={styles.formColumn}>
                                        <label style={styles.label} htmlFor="email">Email *</label>
                                        <input type="email" style={styles.input} name="email" id="email" placeholder="Your email address" required />
                                    </div>
                                </div>

                                <div style={styles.formRow}>
                                    <div style={styles.formColumn}>
                                        <label style={styles.label} htmlFor="message">Project Description *</label>
                                        <textarea style={styles.textarea} name="message" id="message" cols="30" rows="7" required></textarea>
                                    </div>
                                </div>
                                <div style={styles.formRow}>
                                    <div style={styles.formColumn}>
                                        <input type="submit" value="Send Message" style={styles.button} />
                                        <span style={styles.submitting}></span>
                                    </div>
                                </div>
                            </form>

                            <div style={styles.formMessage} id="form-message-warning"></div>
                            <div style={styles.formMessage} id="form-message-success">
                                Your message was sent, thank you!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const styles = {
    content: {
        fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji",
        backgroundColor: "#000000",
        color: "rgba(255, 255, 255, 0.5)",
        lineHeight: 2,
        padding: "7rem 7rem"
    },
    container: {
        display: "flex",
        flexDirection: "column"
    },
    row: {
        display: "flex",
        flexDirection: "row"
    },
    column: {
        flex: "1",
        marginRight: "auto"
    },
    heading: {
        fontSize: "2rem",
        fontWeight: 700,
        color: "#fff",
        marginBottom: "1.5rem"
    },
    box: {
        padding: "40px",
        background: "#200122",
        background: "-webkit-linear-gradient(to right, #200122, #6f0000)",
        background: "linear-gradient(to right, #200122, #6f0000)",
        boxShadow: "-30px 30px 0px 0 rgba(0, 0, 0, 0.08)"
    },
    boxHeading: {
        fontSize: "14px",
        marginBottom: "30px",
        textAlign: "center",
        color: "#888",
        letterSpacing: ".05rem",
        textTransform: "uppercase",
        fontWeight: 400
    },
    label: {
        color: "#000"
    },
    input: {
        border: "none",
        border: "1px solid #ccc",
        borderRadius: "4px",
        height: "50px",
        width: "100%",
        padding: "0 12px",
        marginBottom: "1rem"
    },
    textarea: {
        border: "none",
        border: "1px solid #ccc",
        borderRadius: "4px",
        height: "150px",
        width: "100%",
        padding: "12px",
        marginBottom: "1rem"
    },
    button: {
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.1)",
        backgroundColor: "#000",
        width: "100%",
        height: "50px",
        cursor: "pointer"
    },
    formMessage: {
        marginTop: "1rem",
        display: "none"
    },
    submitting: {
        textAlign: "center",
        float: "left",
        width: "100%",
        padding: "10px 0",
        display: "none",
        fontWeight: "bold",
        fontSize: "12px",
        color: "#000"
    }
};

export default Contact;
