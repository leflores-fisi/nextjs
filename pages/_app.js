import '@/styles/globals.scss';
import '@/styles/blog-globals.scss';
import '@/styles/normalize.css';
import '@/styles/fonts.css';

function MyApp({ Component, pageProps }) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />;
}

export default MyApp;
