import styles from './main-screen.module.css';
import Header from '../../components/header/header';
import Favorites from '../../components/favorites/favorites';
import Hotels from '../../components/hotels/hotels';
import Locations from '../../components/locations/locations';
import {useNavigate} from 'react-router-dom';
import {useAppSelector} from '../../hooks';
import {getAuthorizationStatus} from '../../store/user-process/selectors';
import {useEffect} from 'react';
import {AppRoute, AuthorizationStatus} from '../../const/const';

export default function MainScreen() {
  const navigate = useNavigate();
  const authStatus = useAppSelector(getAuthorizationStatus);

  useEffect(() => {
    if (authStatus === AuthorizationStatus.NoAuth) {
      navigate(AppRoute.Login);
    }
  }, [authStatus, navigate]);

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.wrapper}>
          <Locations />
          <Favorites />
          <Hotels />
        </div>
      </main>
    </>
  );
}
