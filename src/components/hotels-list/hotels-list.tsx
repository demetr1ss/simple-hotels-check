import {useAppSelector} from '../../hooks';
import {getHotels} from '../../store/app-process/selectors';
import HotelCard from '../hotel-card/hotel-card';
import styles from './hotels-list.module.css';

export default function HotelsList() {
  const hotels = useAppSelector(getHotels);

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
