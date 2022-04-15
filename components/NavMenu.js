import React, { useContext, useState, useEffect } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { LangContext } from './context/langContext';
import Link from 'next/link';
import { useRouter } from 'next/router';
import SwitchButton from './SwitchButton';
import Image from 'next/image';

const NavMenu = () => {
  const { translations } = useContext(LangContext);
  const [isHomeVisible, setIsHomeVisible] = useState();
  const router = useRouter();
  useEffect(() => {
    setIsHomeVisible(router.asPath !== "/");
  }, [router.asPath]);

  return (
    <Navbar collapseOnSelect expand="lg" bg={isHomeVisible ? "light" : "red"}>
      <div className="switchButton">
        <SwitchButton />
      </div>
      <Container className="flex-md-column justify-content-center">
        {isHomeVisible && (
          <Navbar.Brand className="mr-0" to="/home">
            <Link href="/" passHref>
              <Image
                src="/img/logo-large.png"
                alt="Logo"
                className="align-top"
                width="141"
                height="72"
              />
            </Link>
          </Navbar.Brand>
        )}
        <Navbar.Toggle className="flex-md-row ml-3" aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="text-center">
            <Link href="/about-company" passHref><a>{translations.about_company.link}</a></Link>
            <Link href="/why-orkin" passHref><a>{translations.why_orkin.link}</a></Link>
            <Link href="/our-services" passHref><a>{translations.our_services.link}</a></Link>
            <Link href="/our-awards" passHref><a>{translations.our_awards.link}</a></Link>
            <Link href="/our-partners" passHref><a>{translations.our_partners.link}</a></Link>
            <Link href="/contacts" passHref><a>{translations.contacts.link}</a></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <style jsx>{`
        a {
            color: ${isHomeVisible ? 'black' : 'white'};
        }
      `}</style>
      <style jsx>{`
      @media (min-width: 576px) {
        .switchButton {
          position: absolute;
        }
      }
        .socialM{
          position: absolute;
          left: 85%;
        }
      
      @media (max-width: 769px){
        .socialM{
          left: 77%;
        }
      }

      @media (max-width: 426px){
        .socialM{
          top: 20%;
          left: 65%;
        }
      }
        
      @media (max-width: 376px){
        .socialM{
          position: relative;
          top: 5px;
          left: 32%;
        }
      }

      @media (max-width: 321px){
          .socialM{
            position: relative;
            top: 5px;
            left: 27%;
          }
      }
        
        a {
           text-decoration: none;
           margin: 8px;
           transition: ease-out 70ms;
        }
        a:hover {
            transform: scale(1.1);
          }
      `}</style>
    </Navbar>
  );
};

export default NavMenu;
