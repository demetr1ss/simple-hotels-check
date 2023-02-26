import {AppRoute} from '../../const/const';
import styles from './error-screen.module.css';

export default function ErrorScreen(): JSX.Element {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>We are sorry &#129302;</h1>
      <a className={styles.link} href={AppRoute.Main}>
        Обновить страницу
      </a>
    </div>
  );
}
