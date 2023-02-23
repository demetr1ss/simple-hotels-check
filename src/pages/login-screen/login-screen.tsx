import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import LoginForm from '../../components/login-form/login-form';
import {AppRoute, AuthorizationStatus} from '../../const/const';
import {useAppSelector} from '../../hooks';
import {getAuthorizationStatus} from '../../store/user-process/selectors';
import styles from './login-screen.module.css';

export default function LoginScreen() {
  const navigate = useNavigate();
  const authStatus = useAppSelector(getAuthorizationStatus);

  useEffect(() => {
    if (authStatus === AuthorizationStatus.Auth) {
      navigate(AppRoute.Main);
    }
  }, [authStatus, navigate]);

  return (
    <main className={styles.main}>
      <div className={styles.bg}></div>
      <LoginForm />
    </main>
  );
}
