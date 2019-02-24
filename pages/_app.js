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