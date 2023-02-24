import {Hotel} from '../../types/types';
import HotelCard from '../hotel-card/hotel-card';
import styles from './hotels-list.module.css';

type HotelsPropsType = {
  hotels: Hotel[];
  checkInDate: string;
};

export default function HotelsList({hotels, checkInDate}: HotelsPropsType) {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {hotels.map((hotel) => (
          <HotelCard key={hotel.hotelId} hotel={hotel} isBig checkInDate={checkInDate} />
        ))}
      </ul>
    </div>
  );
}
