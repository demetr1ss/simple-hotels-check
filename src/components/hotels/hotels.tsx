import {LoadingStatus} from '../../const/const';
import {useAppSelector} from '../../hooks';
import {getHotelsLoadingStatus} from '../../store/app-process/selectors';
import Breadcrumbs from '../breadcrumbs/breadcrumbs';
import Carousel from '../carousel/carousel';
import HotelsList from '../hotels-list/hotels-list';
import Loader from '../loader/loader';
import styles from './hotels.module.css';

type HotelsPropsType = {
  location: string;
  checkInDate: string;
  duration: string;
};

export default function Hotels({location, checkInDate, duration}: HotelsPropsType) {
  const hotelsLoadingStatus = useAppSelector(getHotelsLoadingStatus);
  const date = new Date(checkInDate)
    .toLocaleDateString('ru-RU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
    .slice(0, -3);

  if (hotelsLoadingStatus == LoadingStatus.Pending || hotelsLoadingStatus === LoadingStatus.Idle) {
    return <Loader />;
  }

  return (
    <section className={styles.container}>
      <div className={styles.hotelsHeading}>
        <Breadcrumbs location={location} />
        <span className={styles.date}>{date}</span>
      </div>
      <Carousel />
      <p className={styles.favoritesCount}>
        Добавлено в Избранное: <span className={styles.count}>3</span> отеля
      </p>
      <HotelsList checkInDate={checkInDate} duration={duration} />
    </section>
  );
}
