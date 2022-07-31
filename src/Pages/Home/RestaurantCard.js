
import styled from '@emotion/styled';
import { Link, useLocation } from 'react-router-dom';

const Card = styled(Link)`
  width: calc(33.33% - 10px);
`;

const Img = styled.img`
  width: 100%;
  aspect-ratio: 1.5;
  object-fit: cover;
`;

const useLocale = () => {
  const location = useLocation();
  // "/en/Shibuya" => ["", "en", "Shibuya"]
  // "en/Shibuya" => ["en", "Shibuya"]
  return location.pathname.split('/').find(str => str.length > 0);
};

export default function RestaurantCard({ slug, name, search_image }) {
  const language = useLocale();
  return (
    <Card to={`/${language}/restaurant/${slug}`}>
      <Img src={search_image} />
      {name}
    </Card>
  )
}