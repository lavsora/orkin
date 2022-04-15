import React, { useContext, Fragment } from 'react';
import { LangContext } from '../components/context/langContext';
import { Jumbotron as Jumbo, Container, Row, Col } from 'react-bootstrap';
import FooterContact from '../components/FooterContact';
import styles from '../styles/ourAwards.module.css';
import Image from 'next/image';
import Head from 'next/head';

const OurAwards = () => {
    const {translations} = useContext(LangContext);

    return(
        <Fragment>
            <Head>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
                <title>Наши награды</title>
            </Head>
            <Jumbo fluid className={styles.first_jumbo_awards}>
                <Container>
                    <p className="lead new-line">{translations.our_awards.text1}</p>
                </Container>
            </Jumbo>
            <Jumbo className={styles.second_jumbo_awards}>
                <Container fluid className={styles.text_container}>
                    <h1 className="text-uppercase font-weight-bold">{translations.our_awards.text2}</h1>
                </Container>
                <Container>
                    <Row className={`text-center ${styles.row_contact}`}>
                        <Col>
                            <Image className={styles.img_size_ver} src="/img/awards/awards2017-1.png" alt="award" width="306" height="431" />
                            <p className="lead font-weight-bold text-uppercase mt-3">{translations.our_awards.text_award2017_1}</p>
                        </Col>
                        <Col>
                            <Image className={styles.img_size_ver} src="/img/awards/awards2017-2.png" alt="award" width="306" height="431" />
                            <p className="lead font-weight-bold text-uppercase mt-3">{translations.our_awards.text_award2017_2}</p>
                        </Col>
                    </Row>
                </Container>
            </Jumbo>
            <Jumbo className={styles.second_jumbo_awards}>
                <Container fluid className={styles.text_container}>
                    <h1 className="text-uppercase font-weight-bold">{translations.our_awards.text3}</h1>
                </Container>
                <Container>
                    <Row className={`text-center ${styles.row_contact}`}>
                        <Col>
                            <Image className={styles.img_size_ver} src="/img/awards/awards2018-1.png" alt="award" width="306" height="431" />
                            <p className="lead font-weight-bold text-uppercase mt-3">{translations.our_awards.text_award2018_1}</p>
                        </Col>
                        <Col>
                            <Image className={styles.img_size_ver} src="/img/awards/awards2018-2.png" alt="award" width="306" height="431" />
                            <p className="lead font-weight-bold text-uppercase mt-3">{translations.our_awards.text_award2018_2}</p>
                        </Col>
                    </Row>
                    <Row className="text-center">
                        <Col>
                            <Image className={styles.img_size_hor} src="/img/awards/awards2018-3.png" alt="award" width="431" height="306" />
                            <p className="lead font-weight-bold text-uppercase mt-3">{translations.our_awards.text_award2018_3}</p>
                        </Col>
                    </Row>
                </Container>
            </Jumbo>
            <Jumbo className={styles.second_jumbo_awards}>
                <Container fluid className={styles.text_container}>
                    <h1 className="text-uppercase font-weight-bold">{translations.our_awards.text4}</h1>
                </Container>
                <Container>
                    <Row className={`text-center ${styles.row_contact}`}>
                        <Col>
                            <Image className={styles.img_size_ver} src="/img/awards/awards2019-1.png" alt="award" width="306" height="431" />
                            <p className="lead font-weight-bold text-uppercase mt-3">{translations.our_awards.text_award2019_1}</p>
                        </Col>
                        <Col>
                            <Image className={styles.img_size_ver} src="/img/awards/awards2019-2.png" alt="award" width="306" height="431" />
                            <p className="lead font-weight-bold text-uppercase mt-3">{translations.our_awards.text_award2019_2}</p>
                        </Col>
                    </Row>
                </Container>
            </Jumbo>
            <Jumbo className={styles.second_jumbo_awards}>
                <Container fluid className={styles.text_container}>
                    <h1 className="text-uppercase font-weight-bold">{translations.our_awards.text5}</h1>
                </Container>
                <Container>
                    <Row className={`text-center ${styles.row_contact}`}>
                        <Col>
                            <Image className={styles.img_size_ver} src="/img/awards/awards2020-1.png" alt="award" width="306" height="431" />
                            <p className="lead font-weight-bold text-uppercase mt-3">{translations.our_awards.text_award2020_1}</p>
                        </Col>
                        <Col>
                            <Image className={styles.img_size_ver} src="/img/awards/awards2020-2.png" alt="award" width="306" height="431" />
                            <p className="lead font-weight-bold text-uppercase mt-3">{translations.our_awards.text_award2020_2}</p>
                        </Col>
                    </Row>
                </Container>
            </Jumbo>
            <FooterContact />
        </Fragment>
    )
}

export default OurAwards;
