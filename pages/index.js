import React, { useContext, Fragment } from 'react';
import { Container, Jumbotron as Jumbo, Button } from 'react-bootstrap';
import { LangContext } from '../components/context/langContext';
import FooterContact from '../components/FooterContact';
import styles from '../styles/home.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

export default function Home() {
  const {translations} = useContext(LangContext)

  return (
    <Fragment>
            <Head>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
                <title>ORKIN - комплексная борьба с вредителями.</title>
            </Head>
            <Container className={`text-center ${styles.style}`}>
                <Image src="/img/orkin.png" alt="orkin" width="866" height="433" />
            </Container>
            <Jumbo className={`my-0 ${styles.jumbo_home_color} ${styles.jumbo_home}`}>
                <Container className="my-0 text-center">
                    <h3 className={`text-uppercase ${styles.style_margin} new-line`}>{translations.home.text1}</h3>
                    <Link href="/contacts" passHref><Button className={styles.style_margin_btn} size="lg" variant="warning">{translations.home.button1}</Button></Link>
                </Container>
            </Jumbo>
            <Jumbo className={`my-0 ${styles.jumbo_home}`}>
                <Container className="text-center">
                    <h4 className="text-uppercase">{translations.home.text2}</h4>
                    <p className="lead">{translations.home.text3}</p>
                </Container>
            </Jumbo>
            <FooterContact />
        </Fragment>
  );
}
