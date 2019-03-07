import Layout from '../components/layout';
import React from 'react';
import Link from 'next/link';
import * as request from 'superagent';

class Plp extends React.Component {
    
  constructor(props) {
      super(props);
      this.state= {
        data:[]
      };
    }
    
    componentDidMount() {
     this.fetchData();
    }

    fetchData() {
    const espotname = 'GlobalHeaderBannerAboveHeader';
    const data = request
     .get('https://test1.childrensplace.com/api/getESpot')
     .set('espotname',espotname)
     .set('catalogid',10551)
     .set('langid',-1)
     .set('storeid',10151)
     .set('devicetype','desktop')
     .then(res => {
      this.setState({data:res.body.List});
      })
     .catch(err => {
       console.log("Error in API");
       console.log(err);
     });
    }

    render() {
      return (
        <Layout title='PLP Page'>
        <h1>PLP Page</h1>
        <ul>
          {
            this.state.data.map((eSpot) => (
        <li key={eSpot.espotName}>
        <div
          dangerouslySetInnerHTML={{ __html: eSpot.maketingText }}
        />
        </li>
          ))
          }
        </ul>
        </Layout>
      )
    }
  }

  export default Plp;