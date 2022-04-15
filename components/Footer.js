import React, { useContext } from 'react';
import { Container, Nav } from 'react-bootstrap';
import { LangContext } from './context/langContext';
import styles from '../styles/Footer.module.css';
import Link from 'next/link';

const Footer = () => {
    const {translations} = useContext(LangContext);

    return(
        <Container fluid className={styles.footer}>
            <Nav className={styles.nav_footer}>
                <Link href="/">{translations.footer.link}</Link>
                <Link href="/contacts">{translations.contacts.link}</Link>
                <Link href="/privacy-policy">{translations.footer.link3}</Link>
            </Nav>
            <span>
                © #, LLC {(new Date().getFullYear())}
            </span>
        </Container>
    )
}

export default Footer;