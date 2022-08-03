import { Logo } from '@tablecheck/tablekit-logo';
import { Spinner } from '@tablecheck/tablekit-spinner';
import * as React from 'react';
import { Helmet } from 'react-helmet';
import { FaPhone } from "react-icons/fa";
import { matchPath, useLocation } from 'react-router-dom';


import { PageWrapper, PageContent, Headline } from 'Layouts';

import api from '../../utils/api';

import Map from './Map.js'


// styles
import { DetailsWrapper, Content, Banner, Tags, Tag, Address, Phone, Summary, ContentCenter } from './styles';

const useRestaurant = () => {
  const [restaurant, setRestaurant] = React.useState(null);
  const location = useLocation();
  const match = matchPath('/:locale/restaurant/:slug', location.pathname);
  const slug = match?.params?.slug;

  React.useEffect(() => {
    (async () => {
      const { data } = await api.get(`/shops/${slug}?locale=en&shop_universe_id=57e0b91744aea12988000001`);
      setRestaurant(data.shops[0]);
    })();
  }, [slug])

  return restaurant;
};

export function Details(): JSX.Element {
  const restaurant = useRestaurant();

  if (!restaurant) return <Spinner size="Large" />;

  return (
    <PageWrapper>
      <PageContent>
        <DetailsWrapper>
          <Banner src={restaurant.banner_image} />
          <Content>
            <Headline>{restaurant.name[1]}</Headline>
            <Tags>
              {restaurant.cuisines && restaurant.cuisines.map(cuisine => (
                <Tag key={cuisine}>{cuisine.charAt(0).toUpperCase() + cuisine.slice(1)}</Tag>
              ))}
            </Tags>

            <Phone>
              <FaPhone />
              <span>{restaurant.phone_natl}</span>
            </Phone>

            <Summary>
              {restaurant.content_body_translations[0]?.translation}
            </Summary>

            {restaurant.address &&
              <Address href={`https://www.google.com/maps?saddr=My+Location&daddr=${restaurant.geocode.lat},${restaurant.geocode.lon}`} target="_blank">
                {/* <FaLocationArrow /> */}
                {/* <a href={googleMapsUrl}> */}
                <img src="https://uploads-ssl.webflow.com/5dcadcbd9a526c0e1a357680/5f7348ec8d6e2779f5e1581f_googlemaps.png" alt="" />
                {/* </a> */}
                <div>
                  <p>〒{restaurant.address.postal_code}</p>
                  <p>{restaurant.address.region} {restaurant.address.street} {restaurant.address.street2}</p>
                </div>
              </Address>
            }
            <Map {...restaurant.geocode} />
            <ContentCenter>
              <Logo
                symbolSize="60px"
                wordingSize="180px"
              />
            </ContentCenter>
            {/* <pre>{JSON.stringify(restaurant, null, 20)}</pre> */}
          </Content>
        </DetailsWrapper>
      </PageContent>
      <Helmet>
        <title>Restaurant Name</title>
      </Helmet>
    </PageWrapper >
  );
}
