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
            <title>Dhruv Divekar</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />

            <script async src="https://www.googletagmanager.com/gtag/js?id=UA-93899064-3"></script>
            <script>
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments)}
              gtag('js', new Date());

              gtag('config', 'UA-93899064-3');
            </script>

            <link href="https://fonts.googleapis.com/css?family=Sarala|Thasadith|Montserrat" rel="stylesheet" />
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