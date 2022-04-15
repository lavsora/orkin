import React, { useContext, Fragment, useState } from 'react';
import { LangContext } from '../components/context/langContext';
import { Jumbotron as Jumbo, Container, Form, Button } from 'react-bootstrap';
import FooterContact from '../components/FooterContact';
import styles from '../styles/contacts.module.css';
import Head from 'next/head';

const Contacts = () => {
  const { translations } = useContext(LangContext);

  const [data, setData] = useState({});

  const onInputUpdate = (e) => {
    const { value, name } = e.target;

    if (name === 'contactPhone') {
      setData(data => ({ ...data, [name]: value.replace(/[^\d+]/, '') }))
    } else {
      setData(data => ({ ...data, [name]: value }));
    }
  }

  const sendForm = async () => {
    const parsedData = Object.keys(data).reduce((acc, key, index) => {
      if (index !== Object.keys(data).length - 1) {
        acc +=`${key}=${data[key]}&`
      } else {
        acc +=`${key}=${data[key]}`
      }
      return acc;
    }, '');
    const http = new XMLHttpRequest();


    const url = '/sendEmail.php';
    const params = parsedData;
    http.open('POST', url, true);
    http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');


    http.onreadystatechange = function() {
      if(http.readyState == 4 && http.status == 200) {
        alert(http.responseText);
      }
    }
    http.send(params);
    setData({
      contactName:'',
      contactSurname:'',
      contactEmail:'',
      contactPhone:'',
      contactCity:''
  });
  }

  return (
    <Fragment>
      <Head>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
        <title>Контакты</title>
      </Head>
      <Jumbo fluid className={styles.first_jumbo_contacts}>
        <Container>
          <p className="lead new-line">{translations.contacts.text1}</p>
          <h1 className="new-line">{translations.contacts.text2}</h1>
        </Container>
      </Jumbo>
      <Jumbo className={styles.second_jumbo_contacts}>
        <Container>
          <h1 className="new-line">{translations.contacts.text3}</h1>
          <h2 className="new-line">{translations.contacts.text4} <a href="tel:+77775554433">+7 777 555 4433</a></h2>
          <p className="lead new-line">{translations.contacts.text5}</p>
        </Container>
      </Jumbo>
      <Jumbo className={styles.third_jumbo_contacts}>
        <Container>
          <Form>
            <Form.Group>
              <Form.Label>{translations.contacts.form1}</Form.Label>
              <Form.Control name="contactName" type="text" onChange={onInputUpdate}
                            value={data.contactName} placeholder={translations.contacts.form1} id="contactName"/>
            </Form.Group>
            <Form.Group>
              <Form.Label>{translations.contacts.form2}</Form.Label>
              <Form.Control name="contactSurname" type="text" onChange={onInputUpdate}
                            value={data.contactSurname} placeholder={translations.contacts.form2} id="contactSurname"/>
            </Form.Group>
            <Form.Group>
              <Form.Label>{translations.contacts.form3}</Form.Label>
              <Form.Control name="contactEmail" type="email" onChange={onInputUpdate} placeholder="name@example.com"
                            value={data.contactEmail} id="contactEmail"/>
            </Form.Group>
            <Form.Group>
              <Form.Label>{translations.contacts.form4}</Form.Label>
              <Form.Control name="contactPhone" type="tel" placeholder="+7 (000) 000 00-00" id="contactPhone"
                            value={data.contactPhone} onChange={onInputUpdate}/>
            </Form.Group>
            <Form.Group>
              <Form.Label>{translations.contacts.form5}</Form.Label>
              <Form.Control name="contactCity" type="text" onChange={onInputUpdate}
                            value={data.contactCity} placeholder={translations.contacts.form5} id="contactCity"/>
            </Form.Group>
            <Button type="button" onClick={() => sendForm()}>
              {translations.contacts.button}
            </Button>
          </Form>
        </Container>
      </Jumbo>
      <FooterContact/>
    </Fragment>
  )
}

export default Contacts;
