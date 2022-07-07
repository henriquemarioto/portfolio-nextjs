import Aos from 'aos';
import 'aos/dist/aos.css';
import { ThemeProvider } from 'styled-components';
import { Toaster } from 'react-hot-toast';

import { useEffect } from 'react';
import GlobalStyles from '../styles/global';
import theme from '../styles/theme';
import Providers from '../Providers';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({
      duration: 500
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Providers>
        <Component {...pageProps} />
      </Providers>
      <GlobalStyles />
      <Toaster />
    </ThemeProvider>
  );
}

export default MyApp;
