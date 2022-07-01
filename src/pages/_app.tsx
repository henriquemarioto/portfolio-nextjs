import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../styles/global';
import theme from '../styles/theme';
import Providers from '../Providers';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Providers>
        <Component {...pageProps} />
      </Providers>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default MyApp;
