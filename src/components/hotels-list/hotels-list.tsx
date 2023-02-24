import {useAppSelector} from '../../hooks';
import {getHotels} from '../../store/app-process/selectors';
import HotelCard from '../hotel-card/hotel-card';
import styles from './hotels-list.module.css';

type HotelsPropsType = {
  checkInDate: string;
  duration: string;
};

export default function HotelsList({checkInDate, duration}: HotelsPropsType) {
  const hotels = useAppSelector(getHotels);

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {hotels.map((hotel) => (
          <HotelCard key={hotel.hotelId} hotel={hotel} isBig checkInDate={checkInDate} duration={duration} />
        ))}
      </ul>
    </div>
  );
}
