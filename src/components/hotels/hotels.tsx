import Breadcrumbs from '../breadcrumbs/breadcrumbs';
import Carousel from '../carousel/carousel';
import HotelsList from '../hotels-list/hotels-list';
import styles from './hotels.module.css';

export default function Hotels() {
  return (
    <section className={styles.container}>
      <div className={styles.hotelsHeading}>
        <Breadcrumbs />
        <span className={styles.date}>07 июля 2020</span>
      </div>
      <Carousel />
      <p className={styles.favoritesCount}>
        Добавлено в Избранное: <span className={styles.count}>3</span> отеля
      </p>
      <HotelsList />
    </section>
  );
}
