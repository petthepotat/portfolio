import '../styles/globals.css'
import type { AppProps } from 'next/app'

import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
  <>
    {/* inconsolata -- titles  */}
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
    <link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@500&display=swap" rel="stylesheet"/>

    {/*  dancing script -- fancy  */}
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
    <link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@500&display=swap" rel="stylesheet"></link>

    {/* indie flower -- descriptions */}
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
    <link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@500&family=Indie+Flower&display=swap" rel="stylesheet"></link>

    {/* share tech mono -- general theme */}
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
    <link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@500&family=Indie+Flower&family=Share+Tech+Mono&display=swap" rel="stylesheet"></link>
    
    <Head>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Component {...pageProps} />
  </>)
}
