import { useLocale } from '../../Hooks/useLocale';
import { FaSun, FaMoon } from "react-icons/fa";



// styles
import { Card, Img, Content, Name, Tags, Tag, Price } from './styles.ts';


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
      <Content>
        <Name>{language === 'ja' ? name[0] : name[1]}</Name>
        <Tags>
          {cuisines && cuisines.map(cuisine => (
            <Tag key={cuisine}>{cuisine.charAt(0).toUpperCase() + cuisine.slice(1)}</Tag>
          ))}
        </Tags>
        <Price>
          <FaSun /><span>{budget_lunch_min} ~ {budget_lunch_max}</span>
          <FaMoon /><span>{budget_dinner_min} ~ {budget_dinner_max}</span>
        </Price>
      </Content>
    </Card>
  )
}
