import { useLocale } from '../../Hooks/useLocale';

// styles
import { Card, Img } from './styles.ts';


export default function RestaurantCard({ slug, name, search_image }) {
  const language = useLocale();

  return (
    <Card to={`/${language}/restaurant/${slug}`}>
      <Img src={search_image} />
      {language === 'ja' ? name[0] : name[1]}
    </Card>
  )
}
