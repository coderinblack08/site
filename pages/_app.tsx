import React from 'react';
import Head from 'next/head';
import '../styles/index.css';

function MyApp({ Component, pageProps }: any) {
  return (
    <div className="antialiased">
      <Head>
        <title>Coderinblack</title>
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="Coderinblack portfolio, personal website"
        />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <meta
          name="google-site-verification"
          content="WaNom3LvA5kHdHHd-Kpo-6aj0_7JEEs1_T456egbbVI"
        />
        <meta
          name="keywords"
          content="coderinblack, software, coding, react, vue, nextjs, typescript, pluto"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
