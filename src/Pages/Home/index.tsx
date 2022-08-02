import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router-dom';
import { Logo } from '@tablecheck/tablekit-logo';

import { RestContext } from '../../Context/RestContext'
import * as React from 'react';

// components
import Form from './Form';
import List from './List';
// styles
import { HomeWrapper, ContentCenter } from './styles';


export function Home(): JSX.Element {
  const [t, { language }] = useTranslation();
  const { restaurants } = React.useContext(RestContext)


  return (
    <HomeWrapper>
      {/* <HomeHeadline>{t('attributes.titles.headline')}</HomeHeadline> */}

      <Form />
      <List />
      <ContentCenter>
        {!restaurants && <img src="/img/iphone-mockup.png" alt="iphone" />}
        <Logo
          symbolSize="60px"
          wordingSize="180px"
        />
      </ContentCenter>

      <Outlet />
      <Helmet>
        <title lang={language}>{`${t('attributes.titles.headline')} - ${t(
          'keywords.app_name'
        )}`}</title>
      </Helmet>
    </HomeWrapper>
  );
}

