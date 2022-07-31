import { useLocation } from "react-router-dom";


export const useLocale = () => {
  const location = useLocation();
  // "/en/Shibuya" => ["", "en", "Shibuya"]
  // "en/Shibuya" => ["en", "Shibuya"]
  return location.pathname.split('/').find(str => str.length > 0);
};
