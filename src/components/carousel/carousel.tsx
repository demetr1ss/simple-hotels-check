import {useAppSelector} from '../../hooks';
import {getPhotos} from '../../store/app-process/selectors';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import styles from './carousel.module.css';

export default function Carousel() {
  const photos = useAppSelector(getPhotos);

  return (
    <Swiper
      className={styles.container}
      spaceBetween={12}
      slidesPerView={3.5}
      grabCursor
    >
      {photos.map((slide) => (
        <SwiperSlide key={slide}>
          <img src={slide} width={165} height={150} alt='фото локации.'/>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
