import { useContext } from 'react';
import { RestContext } from '../../Context/RestContext.js'
import RestaurantCard from './RestaurantCard.js';

import styled from '@emotion/styled';

const Grid = styled.div`
  width: 100%;
  max-width: 900px;
  background: #fff;
  margin: 60px auto;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
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
