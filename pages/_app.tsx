import '../styles/globals.css'
import type { AppProps } from 'next/app'

import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
  <>
    {/* inconsolata -- titles  */}
    {/* dancing script -- fancy  */}
    {/* indie flower -- descriptions */}
    {/* share tech mono -- general theme */}
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com"/>
    <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600&family=Inconsolata:wght@500&family=Indie+Flower&family=Share+Tech+Mono&display=swap" rel="stylesheet"/>

    <Head>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Component {...pageProps} />
  </>)
}
