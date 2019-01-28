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