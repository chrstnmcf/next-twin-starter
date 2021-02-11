import { AppProps } from 'next/dist/next-server/lib/router/router';

import GlobalStylesComponent from '../components/GlobalStyles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStylesComponent />
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
