import styles from './main-screen.module.css';
import Header from '../../components/header/header';
import Favorites from '../../components/favorites/favorites';
import Hotels from '../../components/hotels/hotels';
import LocationForm from '../../components/location/location-form';
import {useNavigate} from 'react-router-dom';
import {useAppSelector} from '../../hooks';
import {getAuthorizationStatus} from '../../store/user-process/selectors';
import {useEffect} from 'react';
import {AppRoute, AuthorizationStatus, ToastType} from '../../const/const';
import {getCheckIn, getDuration, getLocation} from '../../store/app-process/selectors';
import {showNotify} from '../../utils/utils';

export default function MainScreen() {
  const navigate = useNavigate();
  const authStatus = useAppSelector(getAuthorizationStatus);
  const location = useAppSelector(getLocation);
  const checkIn = useAppSelector(getCheckIn);
  const duration = useAppSelector(getDuration);

  useEffect(() => {
    if (authStatus === AuthorizationStatus.NoAuth || authStatus === AuthorizationStatus.Unknown) {
      navigate(AppRoute.Login);
      showNotify({
        type: ToastType.Warn,
        message: 'You are not logged in',
      });
    }
  }, [authStatus, navigate]);

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.wrapper}>
          <LocationForm location={location} checkIn={checkIn} duration={duration} />
          <Favorites />
          <Hotels location={location} checkIn={checkIn} />
        </div>
      </main>
    </>
  );
}
