import React from 'react'
import App, { Container } from 'next/app'
import Layout from '../components/layout'
import * as request from 'superagent';


export default class AppWrapper extends App {

static async getInitialProps ({ Component, ctx }) {
        const links = await request
        .get('https://search.unbxd.io/sites/test-childrensplace-com702771523873394/taxonomy?depth=3')
        .then(res => {
            return res.body.taxonomy[0].children;
        })
        .catch(err => {
          console.log("Error in API");
          console.log(err);
        });
        let pageProps={};
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
          }


        return {
          links,
          pageProps
        };
    }

    

  render () {
    const { Component, pageProps, links } = this.props
    return (
      <Container>
        <Layout links={links} title={Component.title}>
          <Component {...pageProps} />
        </Layout>
      </Container>
    )
  }
}