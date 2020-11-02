import * as React from 'react';
import '../styles/index.css';

function MyApp({ Component, pageProps }: any) {
  return (
    <div className="antialiased">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
