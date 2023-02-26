import styles from './not-found-screen.module.css';
import {Link, useLocation} from 'react-router-dom';
import Header from '../../components/header/header';
import {AppRoute, ToastType} from '../../const/const';
import {showNotify} from '../../utils/utils';

export default function NotFoundScreen(): JSX.Element {
  const location = useLocation();
  showNotify({
    type: ToastType.Error,
    message: `Page "${location.pathname.slice(1)}" not found`,
  });

  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.container}>
          <h1 className={styles.error404}>404</h1>
          <h2>Page not found</h2>
          <Link className={styles.link} to={AppRoute.Main}>
            Вернуться на главную
          </Link>
        </section>
      </main>
    </>
  );
}
