import React from 'react';
import * as request from 'superagent'

const Index = (props) => {
  return (
    <React.Fragment>
    <h1>Home Page - eSpots</h1>
    <ul>
      {props.data.map((eSpot) => (
        <li key={eSpot.espotName}>
        <div
          dangerouslySetInnerHTML={{ __html: eSpot.maketingText }}
        />
        </li>
      ))}
    </ul>
    </React.Fragment>
  )
}

Index.title = 'HOME PAGE';

  Index.getInitialProps = async function() {
 
  const espotname = 'LOYAL_MiniBagMSpot';
  const data = await request
   .get('https://test1.childrensplace.com/api/getESpot')
   .set('espotname',espotname)
   .set('catalogid',10551)
   .set('langid',-1)
   .set('storeid',10151)
   .set('devicetype','desktop')
   .then(res => {
     return res.body.List 
    })
   .catch(err => {
     console.log("Error in API");
     console.log(err);
   });
   return {
     data
  }
  }

  export default Index;
 
