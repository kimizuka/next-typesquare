import 'destyle.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, viewport-fit=cover, shrink-to-fit=no" />
        <meta name="generator" content="Next.js" />
        <script
          type="text/javascript"
          src={ process.env.NEXT_PUBLIC_TYPE_SQUARE }
        />
      </Head>
      <Component { ...pageProps } />
    </>
  );
}

export default MyApp;