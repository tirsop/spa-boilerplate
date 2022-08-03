import { Logo } from '@tablecheck/tablekit-logo';
import { FaSun, FaMoon } from "react-icons/fa";

import { useLocale } from '../../Hooks/useLocale';

// styles
import { Card, Img, Content, Name, Tags, Tag, Price, ReplacementImg } from './styles.ts';


export default function RestaurantCard({
  slug,
  name,
  search_image: searchImage,
  budget_lunch_min: budgetLunchMin,
  budget_lunch_max: budgetLunchMax,
  budget_dinner_min: budgetDinnerMin,
  budget_dinner_max: budgetDinnerMax,
  cuisines
}) {
  const language = useLocale();

  return (
    <Card to={`/${language}/restaurant/${slug}`}>
      {searchImage ?
        (<Img src={searchImage} />) :
        <ReplacementImg>
          <Logo
            symbolSize="30px"
            wordingSize="0px"
          />
        </ReplacementImg>}
      <Content>
        <Name>{language === 'ja' ? name[0] : name[1]}</Name>
        <Tags>
          {cuisines && cuisines.map(cuisine => (
            <Tag key={cuisine}>{cuisine.charAt(0).toUpperCase() + cuisine.slice(1)}</Tag>
          ))}
        </Tags>
        <Price>
          {(budgetLunchMin) &&
            <div>
              <FaSun /><span>¥{Math.floor(budgetLunchMin)} ~ ¥{Math.floor(budgetLunchMax)}</span>
            </div>
          }
          {(budgetDinnerMin) &&
            <div>
              <FaMoon /><span>¥{Math.floor(budgetDinnerMin)} ~ ¥{Math.floor(budgetDinnerMax)}</span>
            </div>
          }
        </Price>
      </Content>
    </Card>
  )
}
