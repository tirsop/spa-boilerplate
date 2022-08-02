import { Spinner } from '@tablecheck/tablekit-spinner';
import * as React from 'react'; // import useEffect, useContext, useState
import { FaSearch } from "react-icons/fa";
import { matchPath, useNavigate } from "react-router-dom";

import { RestContext } from '../../Context/RestContext'
// import { Button, ButtonAppearance, ButtonSize } from '@tablecheck/tablekit-button';
import { useLocale } from '../../Hooks/useLocale'
import api from "../../utils/api";

// styles
import { H1, FormWrapper, Button, ContainerCentered } from './styles.ts';


const getRestaurants = async (location) => {
  const autocompleteRes = await api.get(`/autocomplete?locale=en&shop_universe_id=57e0b91744aea12988000001&text=${location.toLowerCase().trim()}`);
  if (!autocompleteRes.data.locations) throw new Error("No restaurants in this area.")
  const coordinates = autocompleteRes.data.locations[0].payload.geo
  const searchRes = await api.get(`/shop_search?geo_latitude=${coordinates.lat}&geo_longitude=${coordinates.lon}&shop_universe_id=57e0b91744aea12988000001&locale=en&per_page=12`);
  return searchRes.data.shops;
};


export default function Form() {
  const match = matchPath('/:locale/:search', window.location.pathname);
  const search = match && match.params && match.params.search || "";   // const search = match?.params?.search || "";
  const locale = useLocale();
  const navigate = useNavigate();
  const [location, setLocation] = React.useState(search)
  const [isPending, setIsPending] = React.useState(false)
  const [error, setError] = React.useState(null)

  const { setRestaurants } = React.useContext(RestContext)

  React.useEffect(() => {
    const mounted = { current: true };
    if (!search) return null;
    const fetchData = async () => {
      setIsPending(true);
      setError(null);
      try {
        const restaurants = await getRestaurants(search);
        if (!mounted.current) return;
        setRestaurants(restaurants);
      }
      catch (err) {
        if (!mounted.current) return;
        setError(err.message);
      }
      finally {
        if (!mounted.current) return;
        setIsPending(false);
      }
    }
    fetchData();
    return () => { mounted.current = false; };
  }, [search, setRestaurants]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate(`/${locale}/${location}`, { replace: true });
    setIsPending(true);
    setError(null);
    try {
      const restaurants = await getRestaurants(location);
      setRestaurants(restaurants)
    }
    catch (err) { setError(err.message) }
    finally { setIsPending(false) }
  }

  return (
    <FormWrapper>
      <H1>Support your Local Restaurants ❤️</H1>
      <form onSubmit={handleSubmit}>
        <input
          id="location"
          onChange={(e) => setLocation(e.target.value)}
          value={location}
          placeholder="Area,cuisine or venue"
          required
        />
        <Button>Submit</Button>
        <FaSearch />
      </form>
      {error}
      {isPending &&
        <ContainerCentered>
          <Spinner size="Large" />
        </ContainerCentered>}
    </FormWrapper>
  )
}
