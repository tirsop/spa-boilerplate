import * as React from 'react';

import { RestContext } from '../../Context/RestContext'

import RestaurantCard from './RestaurantCard';
// styles
import { Grid } from './styles.ts';


export default function List() {
  const { restaurants } = React.useContext(RestContext)

  return (
    <Grid>
      {restaurants ? restaurants.map(restaurant => (
        <RestaurantCard key={restaurant._id} {...restaurant} />
      )) : "Please search something"}
    </Grid>
  )
}
