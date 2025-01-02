import '../styles/global.css'; // Tailwind and custom styles
import React from 'react';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
