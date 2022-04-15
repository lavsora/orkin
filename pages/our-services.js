import React, { useContext, Fragment } from 'react';
import { LangContext } from '../components/context/langContext';
import { Jumbotron as Jumbo, Container, Row, Col } from 'react-bootstrap';
import styles from '../styles/ourServices.module.css';
import FooterContact from '../components/FooterContact';
import Image from 'next/image';
import Head from 'next/head';

const OurServices = () => {
    const {translations} = useContext(LangContext);

    return(
        <Fragment>
            <Head>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
                <title>Наши услуги</title>
            </Head>
            <Jumbo fluid className={styles.first_jumbo_services}>
                <Container>
                    <p className="lead new-line">{translations.our_services.text1}</p>
                    <h1 className="new-line">{translations.our_services.text2}</h1>
                </Container>
            </Jumbo>
            <Jumbo className={styles.second_jumbo_services}>
                <Container>
                    <h2>{translations.our_services.text3}</h2>
                    <p className="lead new-line">{translations.our_services.text4}</p>
                </Container>
            </Jumbo>
            <Jumbo className={styles.third_jumbo_services}>
                <Container>
                    <h2>{translations.our_services.text5}</h2>
                    <Row className={styles.row_contact}>
                        <Col>
                            <Image src="/img/icons/hospital-icon.png" alt="icon" width="105" height="98" />
                            <h3>{translations.our_services.icon1}</h3>
                            <p className="lead">{translations.our_services.text_icon1}</p>
                        </Col>
                        <Col>
                            <Image src="/img/icons/food-service-icon.png" alt="icon" width="105" height="98" />
                            <h3>{translations.our_services.icon2}</h3>
                            <p className="lead">{translations.our_services.text_icon2}</p>
                        </Col>
                        <Col>
                            <Image src="/img/icons/retail-icon.png" alt="icon" width="105" height="98" />
                            <h3>{translations.our_services.icon3}</h3>
                            <p className="lead">{translations.our_services.text_icon3}</p>
                        </Col>
                    </Row>
                    <Row className={styles.row_contact}>
                        <Col>
                            <Image src="/img/icons/healthcare-icon.png" alt="icon" width="105" height="98" />
                            <h3>{translations.our_services.icon4}</h3>
                            <p className="lead">{translations.our_services.text_icon4}</p>
                        </Col>
                        <Col>
                            <Image src="/img/icons/other-icon.png" alt="icon" width="105" height="98" />
                            <h3>{translations.our_services.icon5}</h3>
                            <p className="lead">{translations.our_services.text_icon5}</p>
                        </Col>
                        <Col>
                            <Image src="/img/icons/food-eat-icon.png" alt="icon" width="105" height="98" />
                            <h3>{translations.our_services.icon6}</h3>
                            <p className="lead">{translations.our_services.text_icon6}</p>
                        </Col>
                    </Row>
                </Container>
            </Jumbo>
            <Jumbo className={styles.fourth_jumbo_services}>
                <Container>
                    <h2>{translations.our_services.text6}</h2>
                    <p className="lead new-line">{translations.our_services.text7}</p>
                </Container>
                <Container>
                    <h2>{translations.our_services.text8}</h2>
                    <p className="lead new-line">{translations.our_services.text9}</p>
                </Container>
                <Container>
                    <Row className={styles.row_contact}>
                        <Col>
                            <Image src="/img/icons/residential-icon.png" alt="icon" width="50" height="50" />
                            <h3>{translations.our_services.icon7}</h3>
                            <p className="lead">{translations.our_services.text_icon7}</p>
                        </Col>
                        <Col>
                            <Image src="/img/icons/fumigation-icon.png" alt="icon" width="56" height="50" />
                            <h3>{translations.our_services.icon8}</h3>
                            <p className="lead">{translations.our_services.text_icon8}</p>
                        </Col>
                        <Col>
                            <Image src="/img/icons/monitor-icon.png" alt="icon" width="44" height="50" />
                            <h3>{translations.our_services.icon9}</h3>
                            <p className="lead">{translations.our_services.text_icon9}</p>
                        </Col>
                    </Row>
                </Container>
            </Jumbo>
            <Jumbo className={styles.fifth_jumbo_services}>
                <Container>
                    <h2>{translations.our_services.text10}</h2>
                    <p className="lead new-line">{translations.our_services.text11}</p>
                    <p className="lead new-line">{translations.our_services.text12}</p>
                    <p className="lead new-line">{translations.our_services.text13}</p>
                </Container>
            </Jumbo>
            <FooterContact />
        </Fragment>
    );
}

export default OurServices;
