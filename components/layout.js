import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

const Layout = (props) => {
    const {
      children,
      title = 'This is the default title',
      links=[]
    } = props;
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
          {links.map((link) => (
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
  }

export default Layout;