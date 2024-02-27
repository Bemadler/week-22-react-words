import React from 'react';
import './Footer.css';

function Footer() {
return (
    <footer className="footer">
        <div className="footer-content">
            <p>&copy; 2022 Карточки</p>
            <div className="social-links">
                <a href="https://twitter.com/">Twitter</a>
                <a href="https://facebook.com/">Facebook</a>
            </div>
        </div>
    </footer>
);
}

export default Footer;
