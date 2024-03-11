import React from 'react';
import './Footer.css'; // Import the CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeMerge } from '@fortawesome/free-solid-svg-icons';
import Navbar from 'react-bootstrap/Navbar';
function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="logo">
                    <Navbar.Brand href="/" id="footerLogo">Glance <FontAwesomeIcon icon={faCodeMerge} /> DEV</Navbar.Brand>
                </div>
                <div className="social-icons">
                    <a href="https://www.bing.com/ck/a?!&&p=aa9992906f8e69d7JmltdHM9MTcwOTY4MzIwMCZpZ3VpZD0wYjdlYzQ3Ni0wNzQzLTYwZjYtMjQ0Ni1kNzhkMDZmODYxNjMmaW5zaWQ9NTIwOA&ptn=3&ver=2&hsh=3&fclid=0b7ec476-0743-60f6-2446-d78d06f86163&psq=github&u=a1aHR0cHM6Ly9naXRodWIuY29tLw&ntb=1" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon="fa-brands fa-github-alt" />
                    </a>
                    <a href="https://www.bing.com/ck/a?!&&p=1a80cee41f656c7bJmltdHM9MTcwOTY4MzIwMCZpZ3VpZD0wYjdlYzQ3Ni0wNzQzLTYwZjYtMjQ0Ni1kNzhkMDZmODYxNjMmaW5zaWQ9NTIwMQ&ptn=3&ver=2&hsh=3&fclid=0b7ec476-0743-60f6-2446-d78d06f86163&psq=twitter&u=a1aHR0cHM6Ly90d2l0dGVyLmNvbS8&ntb=1" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon="fa-brands fa-x-twitter" />
                    </a>
                    {/* Add more social icons as needed */}
                    <a href="https://www.bing.com/ck/a?!&&p=2e5d841e3597852cJmltdHM9MTcwOTY4MzIwMCZpZ3VpZD0wYjdlYzQ3Ni0wNzQzLTYwZjYtMjQ0Ni1kNzhkMDZmODYxNjMmaW5zaWQ9NTE5OA&ptn=3&ver=2&hsh=3&fclid=0b7ec476-0743-60f6-2446-d78d06f86163&psq=linkedin&u=a1aHR0cHM6Ly93d3cubGlua2VkaW4uY29tLw&ntb=1" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon="fa-brands fa-linkedin" />
                    </a>

                    <a href="https://www.bing.com/ck/a?!&&p=3dd6617d9ea586ccJmltdHM9MTcwOTY4MzIwMCZpZ3VpZD0wYjdlYzQ3Ni0wNzQzLTYwZjYtMjQ0Ni1kNzhkMDZmODYxNjMmaW5zaWQ9NTIwMw&ptn=3&ver=2&hsh=3&fclid=0b7ec476-0743-60f6-2446-d78d06f86163&psq=instagram&u=a1aHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS8_aGw9ZW4&ntb=1" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon="fa-brands fa-instagram" />
                    </a>
                </div>
                <div className="copyright">
                    <span>© 2024 GlanceDev. All rights reserved.</span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
