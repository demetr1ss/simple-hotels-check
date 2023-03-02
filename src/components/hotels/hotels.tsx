import {LoadingStatus, ToastType} from '../../const/const';
import {useAppSelector} from '../../hooks';
import {getFavoriteHotels, getHotels, getHotelsLoadingStatus, getLocation} from '../../store/app-process/selectors';
import {getLocaleDate, showNotify} from '../../utils/utils';
import ErrorScreen from '../../pages/error-screen/error-screen';
import Breadcrumbs from '../breadcrumbs/breadcrumbs';
import Carousel from '../carousel/carousel';
import HotelsList from '../hotels-list/hotels-list';
import Loader from '../loader/loader';
import styles from './hotels.module.css';
import FavoritesCount from '../favorites-count/favorites-count';

type HotelsPropsType = {
  checkIn: string;
};

export default function Hotels({checkIn}: HotelsPropsType) {
  const hotels = useAppSelector(getHotels);
  const location = useAppSelector(getLocation);
  const favoriteHotels = useAppSelector(getFavoriteHotels);
  const favoriteHotelsCount = favoriteHotels.length;
  const hotelsLoadingStatus = useAppSelector(getHotelsLoadingStatus);

  if (hotelsLoadingStatus === LoadingStatus.Pending || hotelsLoadingStatus === LoadingStatus.Idle) {
    return <Loader />;
  }

  if (!hotels.length) {
    showNotify({
      type: ToastType.Warn,
      message: `Нет отелей в городе: ${location}. Возможно, вы ошиблись в параметрах поиска?`,
    });
  }

  if (!hotels.length || hotelsLoadingStatus === LoadingStatus.Rejected) {
    return <ErrorScreen />;
  }

  return (
    <section className={styles.container}>
      <div className={styles.hotelsHeading}>
        <Breadcrumbs location={hotels[0]?.location.name} />
        <span className={styles.date}>{getLocaleDate(checkIn)}</span>
      </div>
      <Carousel />
      {favoriteHotelsCount > 0 ? <FavoritesCount favoriteHotelsCount={favoriteHotelsCount} /> : ''}
      <HotelsList hotels={hotels} />
    </section>
  );
}
