import Menu from '../components/Menu';

import 'bootstrap/dist/css/bootstrap.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Menu />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
