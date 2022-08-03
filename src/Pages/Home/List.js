import * as React from 'react';

import { RestContext } from '../../Context/RestContext'

import RestaurantCard from './RestaurantCard';
// styles
import { Grid, ContentCenter } from './styles.ts';


export default function List() {
  const { restaurants } = React.useContext(RestContext)

  return (
    <Grid>

      {restaurants &&
        <ContentCenter>Here are our top recommendations:</ContentCenter>
      }
      {restaurants ? restaurants.map(restaurant => (
        <RestaurantCard key={restaurant._id} {...restaurant} />
      )) : ""}
    </Grid>
  )
}
