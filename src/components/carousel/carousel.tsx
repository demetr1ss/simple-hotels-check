import {useAppSelector} from '../../hooks';
import {getPhotos} from '../../store/app-process/selectors';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './carousel.module.css';

export default function Carousel() {
  const photos = useAppSelector(getPhotos);

  return (
    <Slider
      className={styles.container}
      dots={false}
      arrows={false}
      infinite
      slidesToScroll={2}
      variableWidth
    >
      {photos.map((slide) => (
        <div key={slide} className={styles.slide}>
          <img src={slide} width={165} height={150} alt='фото локации.' />
        </div>
      ))}
    </Slider>
  );
}
