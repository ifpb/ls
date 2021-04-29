import Head from 'next/head';
import { Container } from 'react-bootstrap';

import Menu from '../components/Menu';

import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Foods App</title>
      </Head>
      <Menu />
      <Container>
        <Component {...pageProps} />
      </Container>
    </>
  );
}

export default MyApp;
