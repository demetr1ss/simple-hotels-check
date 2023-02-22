import HotelCard from '../hotel-card/hotel-card';
import styles from './favorites.module.css';

export default function Favorites() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Избранное</h2>
      <div className={styles.controls}>
        <button type='button'>Рейтинг</button>
        <button type='button'>Цена</button>
      </div>
      <ul className={styles.list}>
        <HotelCard />
      </ul>
    </section>
  );
}


