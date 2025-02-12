import React from "react";
import "./Footer.css"; // Import the CSS file

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                {/* Useful Links */}
                <div className="footer-column">
                    <h3>Useful Links</h3>
                    <ul>
                        <li><a href="#">Content</a></li>
                        <li><a href="#">How it Works</a></li>
                        <li><a href="#">Create</a></li>
                    </ul>
                </div>

                {/* Community */}
                <div className="footer-column">
                    <h3>Community</h3>
                    <ul>
                        <li><a href="#">Help Center</a></li>
                        <li><a href="#">Partners</a></li>
                        <li><a href="#">Suggestions</a></li>
                    </ul>
                </div>

                {/* Contact Us */}
                <div className="footer-column footer-contact">
                    <h3>Contact Us</h3>
                    <p>Email: <a href="mailto:anokhipehel@mnnit.ac.in">anokhipehel@mnnit.ac.in</a></p>
                    <p>Phone: +91 9580259378</p>
                    <div className="footer-icons">
                        <a href="#">📸</a>
                        <a href="#">📘</a>
                        <a href="#">🔗</a>
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="footer-bottom">
                <p>Copyright © 2024 <strong>anokhipehel.com</strong>. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;

