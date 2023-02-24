import {Hotel} from '../../types/types';
import Breadcrumbs from '../breadcrumbs/breadcrumbs';
import Carousel from '../carousel/carousel';
import HotelsList from '../hotels-list/hotels-list';
import styles from './hotels.module.css';

type HotelsPropsType = {
  hotels: Hotel[];
  location: string;
  checkInDate: string;
};

export default function Hotels({hotels, location, checkInDate}: HotelsPropsType) {
  return (
    <section className={styles.container}>
      <div className={styles.hotelsHeading}>
        <Breadcrumbs location={location} />
        <span className={styles.date}>{checkInDate}</span>
      </div>
      <Carousel />
      <p className={styles.favoritesCount}>
        Добавлено в Избранное: <span className={styles.count}>3</span> отеля
      </p>
      <HotelsList hotels={hotels} checkInDate={checkInDate} />
    </section>
  );
}
