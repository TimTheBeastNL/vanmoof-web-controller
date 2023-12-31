import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Analytics } from '@vercel/analytics/react';
function MyApp({ Component, pageProps }: AppProps) {
  return <div>
    <Head>
     <title>Custom horns</title>
      <link rel="icon" type="image/png" href="/compressed_logos/logo_full_64.png" />
      <link rel="manifest" href="/app.webmanifest"></link>
      <meta name="description" content="Add an custom horn to your S3 and X3." />
      <meta property="og:title" content="Add an custom horn to your S3 and X3." />
      <meta property="og:image" content="https://mooovy.app/screenshot_dark.png" />
    </Head>
    <Component {...pageProps} />
    <Analytics />
  </div>
}

export default MyApp
