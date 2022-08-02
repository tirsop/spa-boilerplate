import * as React from 'react';
import { Helmet } from 'react-helmet';
import { matchPath, useLocation } from 'react-router-dom';


import Map from './Map.js'
import { PageWrapper, PageContent, Headline } from 'Layouts';
import { FaLocationArrow } from "react-icons/fa";

import api from '../../utils/api';

// styles
import { DetailsWrapper, Content, Banner, Tags, Tag, Address } from './styles';

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



  if (!restaurant) return <div>Loading...</div>;

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

            {restaurant.address &&
              <Address>
                <FaLocationArrow />
                <div>
                  <p>〒{restaurant.address.postal_code}</p>
                  <p>{restaurant.address.region} {restaurant.address.street} {restaurant.address.street2}</p>
                </div>
              </Address>
            }
            <Map {...restaurant.geocode} />




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
