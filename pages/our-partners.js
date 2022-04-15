import React, { useContext, Fragment } from 'react';
import { LangContext } from '../components/context/langContext';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import FooterContact from '../components/FooterContact';
import Partners from '../components/Partners';
import styles from '../styles/ourPartners.module.css';
import Head from 'next/head';

const OurPartners = () => {
    const {translations} = useContext(LangContext);

    return(
        <Fragment>
            <Head>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
                <title>Наши партнеры</title>
            </Head>
            <Jumbo fluid className={styles.first_jumbo_partners}>
                <Container>
                    <p className="lead new-line">{translations.our_partners.text1}</p>
                </Container>
            </Jumbo>
            <Partners />
            <FooterContact />
        </Fragment>
    )
}

export default OurPartners;
