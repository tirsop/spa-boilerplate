import { createContext, useState } from "react";


export const RestContext = createContext()

export const RestProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState(null)

  // const writeRestaurants = (newRestaurants) => {
  //   setRestaurants(newRestaurants)
  // }

  return (
    <RestContext.Provider value={{ restaurants, setRestaurants }}>
      {children}
    </RestContext.Provider>
  )
}