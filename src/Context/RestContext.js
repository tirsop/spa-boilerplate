import { createContext, useState } from "react";


export const RestContext = createContext()

export function RestProvider({ children }) {
  const [restaurants, setRestaurants] = useState(null)

  return (
    <RestContext.Provider value={{ restaurants, setRestaurants }}>
      {children}
    </RestContext.Provider>
  )
}