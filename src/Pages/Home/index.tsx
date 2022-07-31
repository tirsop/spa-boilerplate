import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router-dom';



// components
import Form from './Form.js';
import List from './List.js';
// styles
import { HomeWrapper } from './styles';


export function Home(): JSX.Element {
  const [t, { language }] = useTranslation();


  return (
    <HomeWrapper>
      {/* <HomeHeadline>{t('attributes.titles.headline')}</HomeHeadline> */}

      <Form />
      <List />

      <Outlet />
      <Helmet>
        <title lang={language}>{`${t('attributes.titles.headline')} - ${t(
          'keywords.app_name'
        )}`}</title>
      </Helmet>
    </HomeWrapper>
  );
}
