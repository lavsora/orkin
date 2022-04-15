import React, { useContext } from 'react';
import { LangContext } from './context/langContext';
import { Container, Jumbotron as Jumbo, Row, Col } from 'react-bootstrap';
import styles from '../styles/FooterContact.module.css';


const FooterContact = () => {
    const {translations} = useContext(LangContext);

    return(
        <Jumbo className={styles.jumbo_contact}>
            <Container>
                <Row className={styles.row_contact}>
                    <Col>
                        <h3>{translations.footer_contact.call}</h3>
                        <p className="lead">
                            Tel:
                            <a href="tel:+77775554433">+7 777 555 4433</a><br />
                            <a href="tel:+77777222111">+7 7777 222-111</a>
                        </p>
                    </Col>
                    <Col>
                        <h3>{translations.footer_contact.city9}</h3>
                        <p className="lead">
                            Tel:
                            <a href="tel:+77775554433">+7 777 555 4433</a><br />
                            <a href="tel:+77775554433">+7 777 555 4433</a>
                        </p>
                    </Col>
                    <Col>
                        <h3>{translations.footer_contact.city1}</h3>
                        <p className="lead">
                            Tel:
                            <a href="tel:+77775554433">+7 777 555 4433</a>
                        </p>
                    </Col>
                </Row>
                <Row className={styles.row_contact}>
                    <Col>
                        <h3>{translations.footer_contact.city7}</h3>
                        <p className="lead">
                            Tel:
                            <a href="tel:+77775554433">+7 777 555 4433</a>
                        </p>
                    </Col>
                    <Col>
                        <h3>{translations.footer_contact.city10}</h3>
                        <p className="lead">
                            Tel:
                            <a href="tel:+77777222111">+7 7777 222-111</a><br />
                            <a href="tel:+77775554433">+7 777 555 4433</a>
                        </p>
                    </Col>
                    <Col>
                        <h3>{translations.footer_contact.city8}</h3>
                        <p className="lead">
                            Tel:
                            <a href="tel:+77775554433">+7 777 555 4433</a><br />
                            <a href="tel:+77775554433">+7 777 555 4433</a>
                        </p>
                    </Col>
                </Row>
                <Row className={styles.row_contact}>
                    <Col>
                        <h3>{translations.footer_contact.city3}</h3>
                        <p className="lead">
                            Tel:
                            <a href="tel:+77775554433">+7 777 555 4433</a>
                        </p>
                    </Col>
                    <Col>
                        <h3>{translations.footer_contact.city6}</h3>
                        <p className="lead">
                            Tel:
                            <a href="tel:+77775554433">+7 777 555 4433</a>
                        </p>
                    </Col>
                    <Col>
                        <h3>{translations.footer_contact.city4}</h3>
                        <p className="lead">
                            Tel:
                            <a href="tel:+77775554433">+7 777 555 4433</a>
                        </p>
                    </Col>
                </Row>
                <Row className={styles.row_contact}>
                    <Col>
                        <h3>{translations.footer_contact.city5}</h3>
                        <p className="lead">
                            Tel:
                            <a href="tel:+77775554433">+7 777 555 4433</a>
                        </p>
                    </Col>
                    <Col>
                        <h3>{translations.footer_contact.city11}</h3>
                        <p className="lead">
                            Tel:
                            <a href="tel:+77775554433">+7 777 555 4433</a>
                        </p>
                    </Col>
                    <Col>
                        <h3>{translations.footer_contact.city12}</h3>
                        <p className="lead">
                            Tel:
                            <a href="tel:+77775554433">+7 777 555 4433</a>
                        </p>
                    </Col>
                </Row>
                <Row className={styles.row_contact}>
                    <Col>
                        <h3>{translations.footer_contact.city2}</h3>
                        <p className="lead">
                            Tel:
                            <a href="tel:+77775554433">+7 777 555 4433</a>
                        </p>
                    </Col>
                </Row>
            </Container>
        </Jumbo>
    );
}

export default FooterContact;