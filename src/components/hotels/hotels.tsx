import {LoadingStatus} from '../../const/const';
import {useAppSelector} from '../../hooks';
import {getHotelsLoadingStatus} from '../../store/app-process/selectors';
import {getDate} from '../../utils/utils';
import ErrorScreen from '../../pages/error-screen/error-screen';
import Breadcrumbs from '../breadcrumbs/breadcrumbs';
import Carousel from '../carousel/carousel';
import HotelsList from '../hotels-list/hotels-list';
import Loader from '../loader/loader';
import styles from './hotels.module.css';

type HotelsPropsType = {
  location: string;
  checkIn: string;
};

export default function Hotels({location, checkIn}: HotelsPropsType) {
  const hotelsLoadingStatus = useAppSelector(getHotelsLoadingStatus);

  if (hotelsLoadingStatus === LoadingStatus.Pending || hotelsLoadingStatus === LoadingStatus.Idle) {
    return <Loader />;
  }

  if (hotelsLoadingStatus === LoadingStatus.Rejected) {
    return <ErrorScreen />;
  }

  return (
    <section className={styles.container}>
      <div className={styles.hotelsHeading}>
        <Breadcrumbs location={location} />
        <span className={styles.date}>{getDate(checkIn)}</span>
      </div>
      <Carousel />
      <p className={styles.favoritesCount}>
        Добавлено в Избранное: <span className={styles.count}>3</span> отеля
      </p>
      <HotelsList />
    </section>
  );
}
