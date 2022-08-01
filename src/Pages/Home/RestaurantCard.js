import { useLocale } from '../../Hooks/useLocale';
// import { FaAccessibleIcon } from "react-icons/fa";

// styles
import { Card, Img, Name } from './styles.ts';


export default function RestaurantCard({
  slug,
  name,
  search_image,
  budget_lunch_min,
  budget_lunch_max,
  budget_dinner_min,
  budget_dinner_max,
  cuisines,
  is_smartpay
}) {
  const language = useLocale();

  return (
    <Card to={`/${language}/restaurant/${slug}`}>
      <Img src={search_image} />
      <div>
        <Name>{language === 'ja' ? name[0] : name[1]}</Name>
        {cuisines && cuisines.map(cuisine => (
          <p className="">{cuisine}</p>
        ))}
      </div>
    </Card>
  )
}
