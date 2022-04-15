import React from 'react';
import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css';
import LangContextWrapper from '../components/context/langContext';
import NavMenu from '../components/NavMenu'
import Footer from '../components/Footer'
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <link rel="shortcut icon" href='favicon.ico' />
      </Head>
      <LangContextWrapper>
        <NavMenu/>
        <Component {...pageProps} />
        <Footer />
      </LangContextWrapper>
    </>
  );
}

export default MyApp;
