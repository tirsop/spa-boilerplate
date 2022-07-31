import { useContext } from 'react';
import { RestContext } from '../../Context/RestContext.js'
import RestaurantCard from './RestaurantCard.js';

import styled from '@emotion/styled';

const Grid = styled.div`
  width: 100%;
  max-width: 900px;
  background: #fff;
  margin: 60px auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 24px;
  row-gap: 40px;
`;

export default function List() {
  const { restaurants } = useContext(RestContext)

  return (
    <Grid>
      {restaurants ? restaurants.map(restaurant => (
        <RestaurantCard key={restaurant._id} {...restaurant} />
      )) : "Please search something"}
    </Grid>
  )
}
