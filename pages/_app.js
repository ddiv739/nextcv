import React from 'react'
import App, { Container } from 'next/app'
import Head from 'next/head'

import '../resources/bootstrap/dist/css/bootstrap.min.css'
import '../style/main.scss'

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render () {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Head>
            <title>New Portfolio</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous" />
            {/* Have to use CDN for font awesome as no download available */}
        </Head>
        <Component {...pageProps} />
        {/* <style jsx global>
        {`
            * {
                font-family: 'Montserrat';
            }

        `}
        </style> */}
      </Container>

      
    )
  }
}