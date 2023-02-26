import {HotelType} from '../../types/types';
import HotelCard from '../hotel-card/hotel-card';
import styles from './hotels-list.module.css';

type HotelListPropsType = {
  hotels: HotelType[];
};

export default function HotelsList({hotels}: HotelListPropsType) {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {hotels.map((hotel) => (
          <HotelCard
            key={hotel.hotelId}
            hotel={hotel}
            isBig
            checkIn={hotel.checkIn}
            duration={hotel.duration}
          />
        ))}
      </ul>
    </div>
  );
}
