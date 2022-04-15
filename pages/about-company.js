import React, { useContext, Fragment } from 'react';
import { LangContext } from '../components/context/langContext';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styles from '../styles/aboutCompany.module.css';
import FooterContact from '../components/FooterContact';
import Head from 'next/head';

const AboutCompany = () => {
    const {translations} = useContext(LangContext);

    return(
        <Fragment>
            <Head>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
                <title>О компании</title>
            </Head>
            <Jumbo fluid className={styles.first_jumbo}>
                <Container>
                    <p className="lead new-line">{translations.about_company.text1}</p>
                    <h1 className="new-line">{translations.about_company.text2}</h1>
                </Container>
            </Jumbo>
            <Jumbo className={styles.second_jumbo}>
                <Container>
                    <h2>{translations.about_company.text3}</h2>
                    <p className="lead new-line">{translations.about_company.text4}</p>
                </Container>
            </Jumbo>
            <Jumbo className={styles.third_jumbo}>
                <Container>
                    <h2>{translations.about_company.text5}</h2>
                    <p className="lead new-line">{translations.about_company.text6}</p>
                </Container>
            </Jumbo>
            <Jumbo className={styles.fourth_jumbo}>
                <Container>
                    <h2>{translations.about_company.text7}</h2>
                    <p className="lead new-line">{translations.about_company.text8}</p>
                </Container>
            </Jumbo>
            <FooterContact />
        </Fragment>
    );
}

export default AboutCompany;
