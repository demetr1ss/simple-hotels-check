import HotelCard from '../hotel-card/hotel-card';
import styles from './hotels-list.module.css';

export default function HotelsList() {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        <HotelCard isBig />
        <HotelCard isBig />
        <HotelCard isBig />
        <HotelCard isBig />
        <HotelCard isBig />
        <HotelCard isBig />
        <HotelCard isBig />
        <HotelCard isBig />
      </ul>
    </div>
  );
}
