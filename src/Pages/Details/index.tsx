import * as React from 'react';
import { Helmet } from 'react-helmet';
import { matchPath, useLocation } from 'react-router-dom';

import { PageWrapper, PageContent, Headline } from 'Layouts';

import api from '../../utils/api';

// styles
import { Content, Banner } from './styles';

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
      <Headline>{restaurant.name[1]}</Headline>
      <PageContent>
        <Content>
          <Banner src={restaurant.banner_image} />
          <pre>{JSON.stringify(restaurant, null, 2)}</pre>
        </Content>
      </PageContent>
      <Helmet>
        <title>Restaurant Name</title>
      </Helmet>
    </PageWrapper >
  );
}
