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
    const data = request
     .get('https://search.unbxd.io/8870d5f30d9bebafac29a18cd12b801d/childrensplace-com702771523455856/category?start=0&rows=20&variants=true&variants.count=0&version=V2&facet.multiselect=true&selectedfacet=true&fields=alt_img,style_partno,giftcard,TCPProductIndUSStore,TCPFitMessageUSSstore,TCPFit,TCPWebOnlyFlagUSStore,TCPWebOnlyFlagCanadaStore,TCPSwatchesUSStore,top_rated,TCPSwatchesCanadaStore,product_name,TCPColor,imagename,productid,uniqueId,favoritedcount,TCPBazaarVoiceReviewCount,categoryPath3_fq,categoryPath3,categoryPath3_catMap,categoryPath2_catMap,product_short_description,min_list_price,min_offer_price,TCPBazaarVoiceRating,seo_token,prodpartno,banner,facets,auxdescription,list_of_attributes,numberOfProducts,redirect,searchMetaData,didYouMean,TCPLoyaltyPromotionTextUSStore,TCPLoyaltyPLCCPromotionTextUSStore,TcpBossCategoryDisabled,TcpBossProductDisabled&pagetype=boolean&p-id=categoryPathId:%2247511%3E49005%22&sort=sort_49005%20asc,pop_score%20desc')
     .then(res => {
        this.setState({
          data: res.body.response.products
        });
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
        <ul className="product-wrapper">
          {
            this.state.data.map( item => (
              <li className="product-item">
                <p className="product-image">
                  <img src={`https://www.childrensplace.com/wcsstore/GlobalSAS/images/tcp/products/500/${item.imagename}-6.jpg`} />
                </p>
                <p className="product-name">
                  {item.product_name}
                </p>
                <p className="product-disc-price">
                  {item.min_offer_price}
                </p>
                <p className="product-original-price">
                  {`Was ${item.min_list_price}`}
                </p>
              </li>
          ))
          }
        </ul>
        </Layout>
      )
    }
  }

  export default Plp;