import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import LoginForm from '../../components/login-form/login-form';
import {AppRoute, AuthorizationStatus} from '../../const/const';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {fetchHotels} from '../../store/app-process/app-process';
import {getAuthorizationStatus} from '../../store/user-process/selectors';
import styles from './login-screen.module.css';

export default function LoginScreen() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const authStatus = useAppSelector(getAuthorizationStatus);

  useEffect(() => {
    if (authStatus === AuthorizationStatus.Auth) {
      navigate(AppRoute.Main);
      dispatch(fetchHotels());
    }
  }, [authStatus, dispatch, navigate]);

  return (
    <main className={styles.main}>
      <div className={styles.bg}></div>
      <LoginForm />
    </main>
  );
}
