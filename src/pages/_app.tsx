import type { AppProps } from 'next/app';

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
