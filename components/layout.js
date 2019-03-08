import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import * as request from 'superagent';

class Layout extends React.Component {

  constructor(props) {
    super(props);
    this.state= {
      links:[]
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const data = request
     .get('https://search.unbxd.io/sites/test-childrensplace-com702771523873394/taxonomy?depth=3')
     .then(res => {
        this.setState({
          links: res.body.taxonomy[0].children
        });
      })
     .catch(err => {
       console.log("Error in API");
       console.log(err);
     });
    }

  render () {
    const {
      children,
      title = 'This is the default title',
    } = this.props;

    return ( 
      <div>
        <Head>
          <title>{title}</title>
          <meta charSet='utf-8' />
          <link href="/static/main.css" rel="stylesheet" />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        </Head>
        <header>
          <nav>
            <Link href='/'>
              <a>Home</a>
            </Link>{' '}
          
          </nav>
        </header>
        <ul className="navigation-bar">
          {this.state.links.map((link) => (
            <li className="navigation-level-one">
             <Link href='/plp'>
                <a>{link.name}</a>
              </Link>
            </li>
          ))}
        </ul>
        {children}
  
        <footer>{''}</footer>
      </div>
    )
  }}

export default Layout;