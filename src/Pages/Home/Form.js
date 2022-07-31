import { useEffect, useState } from "react"
import { useContext } from 'react';
import { RestContext } from '../../Context/RestContext.js'
import { Button, ButtonAppearance, ButtonSize } from '@tablecheck/tablekit-button';




// styles
import { H1, FormWrapper } from './styles';
import { useLocale } from '../../Hooks'
import { matchPath, useNavigate } from "react-router-dom";
import api from "../../utils/api";


const getRestaurants = async (location) => {
  const autocompleteRes = await api.get(`/autocomplete?locale=en&shop_universe_id=57e0b91744aea12988000001&text=${location.toLowerCase().trim()}`);
  if (!autocompleteRes.data.locations) throw new Error("No restaurants in this area.")
  const coordinates = autocompleteRes.data.locations[0].payload.geo
  const searchRes = await api.get(`/shop_search?geo_latitude=${coordinates.lat}&geo_longitude=${coordinates.lon}&shop_universe_id=57e0b91744aea12988000001&locale=en&per_page=5`);
  console.log(searchRes.data.shops);
  return searchRes.data.shops;
};

export default function Form() {
  const match = matchPath('/:locale/:search', window.location.pathname);
  // const search = match?.params?.search || "";
  const search = match && match.params && match.params.search || "";
  const locale = useLocale();
  const navigate = useNavigate();
  const [location, setLocation] = useState(search)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(null)

  const { setRestaurants } = useContext(RestContext)

  useEffect(() => {
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
    return () => {
      mounted.current = false;
    };
  }, [search]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate(`/${locale}/${location}`, { replace: true });

    setIsPending(true);
    setError(null);
    try {
      const restaurants = await getRestaurants(location);
      console.log('HANDLE:', restaurants)
      setRestaurants(restaurants)
    }
    catch (err) {
      setError(err.message)
    }
    finally {
      setIsPending(false)
    }
  }


  // styles
  // const H1 = styled.h1`
  //   color: red;
  // `
  return (
    <FormWrapper>
      <H1>Support your Local Restaurants ❤️</H1>
      <form onSubmit={handleSubmit}>
        {/* <label htmlFor="locataion">
          Where are you looking for?
        </label> */}
        <input
          id="location"
          onChange={(e) => setLocation(e.target.value)}
          value={location}
          placeholder="Area,cuisine or venue"
          required
        />
        {/* <Button size={ButtonSize.Regular2} shape="sharp" shouldFitContainer={true}	>Submit</Button> */}
        <button>Submit</button>
        {/* <FontAwesomeIcon icon="fa-regular fa-magnifying-glass" /> */}
        {/* <Icon icon={faSearch} /> */}
      </form>
    </FormWrapper>
  )
}
