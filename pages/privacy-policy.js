import React, { useContext, Fragment } from 'react';
import { Container, Jumbotron as Jumbo } from 'react-bootstrap';
import { LangContext } from '../components/context/langContext';
import Head from 'next/head';

const PrivacyPolicy = () => {
    const {translations} = useContext(LangContext);

    return(
        <Fragment>
            <Head>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
                <title>Политика конфиденциальности</title>
            </Head>
        <Jumbo className="mb-0">
            <Container>
                <h1>{translations.privacy_policy.text1}</h1>
                <p className="lead">{translations.privacy_policy.text2}</p>
                <p className="lead">{translations.privacy_policy.text3}</p>
                <p className="lead">{translations.privacy_policy.text4}</p>
                <p className="lead">{translations.privacy_policy.text5}</p>
                <p className="lead">{translations.privacy_policy.text6}</p>
                <p className="lead">{translations.privacy_policy.text7}</p>
                <p className="lead new-line">{translations.privacy_policy.text8}</p>

                <h2>{translations.privacy_policy.text9}</h2>
                <p className="lead">{translations.privacy_policy.text10}</p>
                <p className="lead new-line">{translations.privacy_policy.text11}</p>
                <p className="lead">{translations.privacy_policy.text12}</p>
                <p className="lead new-line">{translations.privacy_policy.text13}</p>
                <p className="lead">{translations.privacy_policy.text14}</p>
                <p className="lead new-line">{translations.privacy_policy.text15}</p>

                <h2>{translations.privacy_policy.text16}</h2>
                <p className="lead new-line">{translations.privacy_policy.text17}</p>
                <p className="lead">{translations.privacy_policy.text18}</p>

                <h2>{translations.privacy_policy.text19}</h2>
                <p className="lead">{translations.privacy_policy.text20}</p>
                <p className="lead">{translations.privacy_policy.text21}</p>
                <p className="lead">{translations.privacy_policy.text22}</p>
                <p className="lead new-line">{translations.privacy_policy.text23}</p>

                <h2>{translations.privacy_policy.text24}</h2>
                <p className="lead">{translations.privacy_policy.text25}</p>

                <h2>{translations.privacy_policy.text26}</h2>
                <p className="lead">{translations.privacy_policy.text27}</p>
                <p className="lead">{translations.privacy_policy.text28}</p>

                <h2>{translations.privacy_policy.text29}</h2>
                <p className="lead">{translations.privacy_policy.text30}</p>
                <p className="lead">{translations.privacy_policy.text31}</p>
            </Container>
        </Jumbo>
        </Fragment>
    )
}

export default PrivacyPolicy;