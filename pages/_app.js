import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {

  return <Component {...pageProps} />;
}
