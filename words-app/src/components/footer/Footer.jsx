import React from 'react';
import styles from './Footer.module.css';

function Footer() {
return (
    <footer className={styles.footer}>
        <div className={styles.footerContent}>
            <p>&copy; 2022 Карточки</p>
            <div className={styles.socialLinks}>
                <a href="https://twitter.com/">Twitter</a>
                <a href="https://facebook.com/">Facebook</a>
            </div>
        </div>
    </footer>
);
}

export default Footer;
