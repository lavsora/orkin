import React, { useContext, Fragment } from 'react';
import { LangContext } from '../components/context/langContext';
import { Jumbotron as Jumbo, Container, Row, Col } from 'react-bootstrap';
import FooterContact from '../components/FooterContact';
import styles from '../styles/whyOrkin.module.css';
import Image from 'next/image';
import Head from 'next/head';

const WhyOrkin = () => {
    const {translations} = useContext(LangContext);

    return(
        <Fragment>
            <Head>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
                <title>Почему Orkin</title>
            </Head>
            <Jumbo fluid className={styles.first_jumbo_why}>
                <Container>
                    <p className="lead new-line">{translations.why_orkin.text1}</p>
                    <h1 className="new-line">{translations.why_orkin.text2}</h1>
                </Container>
            </Jumbo>
            <Jumbo className={styles.second_jumbo_why}>
                <Container>
                    <h2>{translations.why_orkin.text3}</h2>
                    <p className="lead new-line">{translations.why_orkin.text4}</p>
                </Container>
            </Jumbo>
            <Jumbo className={styles.third_jumbo_why}>
                <Container>
                    <Row className={styles.row_contact}>
                        <Col>
                            <Image src="/img/icons/national_icon.png" alt="icon" width="39" height="50" />
                            <h3>{translations.why_orkin.icon1}</h3>
                            <p className="lead">{translations.why_orkin.text_icon1}</p>
                        </Col>
                        <Col>
                            <Image src="/img/icons/experts_icon.png" alt="icon" width="50" height="50" />
                            <h3>{translations.why_orkin.icon2}</h3>
                            <p className="lead">{translations.why_orkin.text_icon2}</p>
                        </Col>
                        <Col>
                            <Image src="/img/icons/quick_icon.png" alt="icon" width="41" height="50" />
                            <h3>{translations.why_orkin.icon3}</h3>
                            <p className="lead">{translations.why_orkin.text_icon3}</p>
                        </Col>
                    </Row>
                    <Row className="row_contact">
                        <Col>
                            <Image src="/img/icons/safety_icon.png" alt="icon" width="56" height="50" />
                            <h3>{translations.why_orkin.icon4}</h3>
                            <p className="lead">{translations.why_orkin.text_icon4}</p>
                        </Col>
                        <Col>
                            <Image src="/img/icons/entomologists_icon.png" alt="icon" width="53" height="50" />
                            <h3>{translations.why_orkin.icon5}</h3>
                            <p className="lead">{translations.why_orkin.text_icon5}</p>
                        </Col>
                        <Col>
                            <Image src="/img/icons/audit_icon.png" alt="icon" width="50" height="50" />
                            <h3>{translations.why_orkin.icon6}</h3>
                            <p className="lead">{translations.why_orkin.text_icon6}</p>
                        </Col>
                    </Row>
                </Container>
            </Jumbo>
            <FooterContact />
        </Fragment>
    );
}

export default WhyOrkin;
